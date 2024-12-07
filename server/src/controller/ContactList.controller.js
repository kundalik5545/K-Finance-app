// import { asyncHandler } from "../utils/asyncHandler.js";
// import { ContactList } from "../model/ContactList.model.js";
// import { ApiResponse } from "../utils/ApiResponse.js";

// // Add New Contact Logic
// const addNewContact = asyncHandler(async (req, res) => {
//   const user = req.user; // Assuming user is authenticated
//   const { contactName, contactPhone, contactEmail } = req.body;

//   if (!contactName || !contactPhone || !contactEmail) {
//     return res
//       .status(400)
//       .json(new ApiResponse(400, null, "All fields are required!"));
//   }

//   // Find the user's contact list
//   let contactList = await ContactList.findOne({ userId: user._id });

//   if (!contactList) {
//     // If no contact list exists for the user, create one
//     try {
//       contactList = await ContactList.create({
//         userId: user._id,
//         userContactsDetails: [{ contactName, contactPhone, contactEmail }],
//       });
//     } catch (error) {
//       console.log("error in catch of contaclist:-", error);

//       // return res
//       //   .status(500)
//       //   .json(new ApiResponse(500, null, "Error creating contact list"));
//     }
//   } else {
//     // Check if contact already exists in the list
//     const contactExists = contactList.userContactsDetails.some(
//       (contact) =>
//         contact.contactPhone === contactPhone ||
//         contact.contactEmail === contactEmail
//     );

//     if (contactExists) {
//       return res
//         .status(400)
//         .json(new ApiResponse(400, null, "Contact already exists!"));
//     }

//     // If the contact doesn't exist, add the new contact to the list
//     contactList.userContactsDetails.push({
//       contactName,
//       contactPhone,
//       contactEmail,
//     });

//     try {
//       console.log("ruuning try to save contact");

//       const res = await contactList.save();
//       console.log(res);
//     } catch (error) {
//       return res
//         .status(500)
//         .json(
//           new ApiResponse(
//             500,
//             error.data.errors.userContactsDetails[1].contactPhone.message,
//             "Error saving contact"
//           )
//         );
//     }
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, contactList, "Contact added successfully!"));
// });

// export { addNewContact };

import { asyncHandler } from "../utils/asyncHandler.js";
import { Contact } from "../model/ContactList.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../model/User.model.js";

const addNewContact = asyncHandler(async (req, res) => {
  const user = req.user; // Assuming the user is authenticated
  const { contactName, contactPhone, contactEmail } = req.body;

  if (!contactName || !contactPhone || !contactEmail) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required!"));
  }

  try {
    // Create a new contact
    const newContact = await Contact.create({
      userId: user._id,
      contactName,
      contactPhone,
      contactEmail,
    });

    return res
      .status(201)
      .json(new ApiResponse(201, newContact, "Contact added successfully!"));
  } catch (error) {
    // Handle uniqueness error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res
        .status(400)
        .json(new ApiResponse(400, null, `Duplicate ${field} detected!`));
    }
    return res
      .status(500)
      .json(
        new ApiResponse(500, null, "An error occurred while adding contact")
      );
  }
});

const getAllContacts = asyncHandler(async (req, res) => {
  const user = req.user;

  try {
    const contacts = await Contact.find({ userId: user._id });

    if (contacts.length === 0) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "No contacts found for this user."));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, contacts, "Contacts retrieved successfully."));
  } catch (error) {
    console.error("Error retrieving contacts:", error);

    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          null,
          "An error occurred while retrieving contacts."
        )
      );
  }
});

const deleteContactList = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

export { addNewContact, getAllContacts, deleteContactList };
