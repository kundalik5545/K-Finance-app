import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { BadgePlus, X } from "lucide-react";
import { Input } from "../ui/input";
import axiosInstance from "@/Api/AxiosInstance";

const ContactList = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/contact-list/addNew", formData, {
        withCredentials: true,
      });
      setFormData({ contactName: "", contactPhone: "", contactEmail: "" });
      setDisplayForm(false);
      getAllContacts();
    } catch (error) {
      console.error("Error in submitting form:", error.message);
      alert("Failed to add contact. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    console.log("id is:- ", id);

    try {
      await axiosInstance.delete(`/contact-list/delete/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id));
      getAllContacts();
    } catch (error) {
      console.error("Error deleting contact:", error.message);
      alert("Failed to delete contact. Please try again.");
    }
  };

  const handleFormDisplay = () => {
    setDisplayForm(!displayForm);
  };

  const getAllContacts = async () => {
    try {
      const res = await axiosInstance.get("/contact-list/get-contact", {
        withCredentials: true,
      });
      if (res.data.success) {
        setContacts(res.data.data);
      } else {
        alert(res.data.message || "Failed to fetch contacts.");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error.message);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto p-3 text-gray-800 bg-white m-3 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-left font-inter">
          Add New Contact
        </h2>
        <div className="herp-section">
          <Button onClick={handleFormDisplay}>
            <BadgePlus />
            Add Contact
          </Button>

          {displayForm && (
            <form
              onSubmit={handleAddContact}
              className="space-y-3 w-96 sm:w-[400px] shadow-lg p-4 rounded-lg"
            >
              <span className="close-form-btn flex justify-end">
                <Button variant="outline" onClick={handleFormDisplay}>
                  <X />
                </Button>
              </span>
              <Input
                type="text"
                name="contactName"
                required
                placeholder="Enter Name"
                value={formData.contactName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded font-inter"
              />
              <Input
                type="text"
                name="contactPhone"
                required
                placeholder="Enter Phone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded font-inter"
              />
              <Input
                type="email"
                name="contactEmail"
                placeholder="Email (optional)"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded font-inter"
              />
              <Button type="submit">Add Contact</Button>
              <Button
                type="button"
                onClick={() =>
                  setFormData({
                    contactName: "",
                    contactPhone: "",
                    contactEmail: "",
                  })
                }
                className="ml-3"
              >
                Reset
              </Button>
            </form>
          )}
        </div>

        {/* Contact Cards Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div
                key={contact._id}
                className="bg-white shadow-md p-4 rounded flex flex-col items-start space-y-2"
              >
                <h3 className="text-lg font-semibold">{contact.contactName}</h3>
                <p className="text-gray-600">Phone: {contact.contactPhone}</p>
                {contact.contactEmail && (
                  <p className="text-gray-600">Email: {contact.contactEmail}</p>
                )}

                <div className="mt-2 flex space-x-2">
                  <a
                    href={`tel:+91${contact.contactPhone}`}
                    onClick={() => alert(`Calling ${contact.contactPhone}`)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Call Now
                  </a>
                  <button
                    onClick={() => alert(`Edit Contact ${contact.contactName}`)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <>
              <p className="">No Contacts added!</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
