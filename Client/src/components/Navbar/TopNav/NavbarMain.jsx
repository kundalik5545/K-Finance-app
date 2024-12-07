import React, { useEffect, useState, useContext } from "react";
import WebsiteName from "./WebsiteName";
import axios from "axios";
import UserProfileAvatar from "./UserProfileAvatar";
import Navlinks from "./Navlinks";
import MenuIcon from "./MenuIcon";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { LogInContext } from "@/App";
import toast from "react-hot-toast";
function NavbarMain() {
  const { isLoggedIn, user } = useContext(LogInContext);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      setResult(user);
    }
  }, [isLoggedIn]);

  return (
    <div className="mx-auto w-full bg-white border-gray-200 dark:bg-gray-900">
      <nav className="user-navbar website-log flex flex-wrap items-center justify-between mx-auto p-4 max-w-screen-xl">
        <WebsiteName />
        <Navlinks />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isLoggedIn ? (
            <UserProfileAvatar
              userName={result.firstName}
              userEmail={result.email}
            />
          ) : (
            <>
              <span className="block md:hidden">
                <MenuIcon />
              </span>
              <div className="menu-login-btn space-x-3 hidden lg:block">
                <Link to="sign-up">
                  <Button>
                    <UserPlus /> Sign Up
                  </Button>
                </Link>
                <Link to="login">
                  <Button>
                    <LogIn /> Login
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavbarMain;
