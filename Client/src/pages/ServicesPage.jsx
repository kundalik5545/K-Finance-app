import React, { useContext, useState, useEffect } from "react";
import { LogInContext } from "@/App";
import { iconsList } from "@/Utils/IconsList.js";
import { NavLink } from "react-router-dom";
import axiosInstance from "@/Api/AxiosInstance";

function ServicesPage() {
  const { isLoggedIn, user } = useContext(LogInContext);
  const [allCards, setAllCards] = useState([]); // Initialize as an empty array

  const getServices = async () => {
    try {
      const res = await axiosInstance.get("admin/services/get-services");
      setAllCards(res.data.data || []); // Use data from the API or fallback to an empty array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-3 text-gray-800 bg-white m-3 mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-left font-inter">
        Welcome to the Services Page
      </h2>

      <div className="main-sec flex flex-col gap-3">
        <div className="hero-sec grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
          {allCards.length > 0 ? (
            allCards.map((item) => {
              const IconComponent = iconsList[item.cardIcon];
              return (
                <NavLink
                  to={item.cardUrl}
                  key={item.id}
                  className="p-4 bg-blue-100 rounded-lg flex flex-col items-center justify-center space-y-2 shadow-md hover:shadow-lg transition-shadow duration-300 font-inter"
                >
                  {IconComponent ? <IconComponent size={30} /> : null}
                  <span className="text-sm text-center font-inter">
                    {item.cardTitle}
                  </span>
                </NavLink>
              );
            })
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No services available.
            </p>
          )}
        </div>

        <div className="info-sec space-y-2 font-inter pt-5">
          <p>Info Section</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
