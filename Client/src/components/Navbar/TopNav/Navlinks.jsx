import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LogInContext } from "@/App";
import { useAuth } from "@/hooks/useAuth";

function Navlinks() {
  const { isLoggedIn } = useContext(LogInContext);

  // const { isLoggedIn } = useAuth();

  return (
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {isLoggedIn ? (
          <>
            {/* Authenticated links */}
            <li>
              <NavLink to="/dashboard" end>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" end>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/calculators" end>
                Calculators
              </NavLink>
            </li>
            <li>
              <NavLink to="/assets" end>
                Assets
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" end>
                Blog
              </NavLink>
            </li>
          </>
        ) : (
          <>
            {/* Public links */}
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" end>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/calculators" end>
                Calculators
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" end>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" end>
                Blog
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navlinks;
