import {
  Instagram,
  Github,
  Facebook,
  Youtube,
  Twitter,
  Copyright,
  Briefcase,
  HandHelping,
  Scale,
  Download,
  Share2,
} from "lucide-react";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShareUs from "./ShareUs";

function Footer() {
  useEffect(() => {
    const handleLinkCLick = () => {
      window.scrollTo(0, 0);
    };
    // Attach click event listener to all NavLink elements
    const links = document.querySelectorAll(".footer-link");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkCLick);
    });

    // Cleanup the event listener when component is unmounted
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkCLick);
      });
    };
  }, []);

  return (
    <footer className="bg-black text-white font-inter">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 ">
          <div>
            <h2 className="flex justify-center md:justify-start items-center space-x-2 md:space-x-1 mb-6 text-xl font-semibold">
              <Briefcase />
              <span className="text-center">Explore Products</span>
            </h2>
            <ul className="text-base flex flex-col items-start">
              <li className="mb-4">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Personal Wealth Tracker
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="insurance"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Insurance
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/stocks"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Stocks
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/bills"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Bills
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/hospital"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Hospitals
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/calculator"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Finance Calculators
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/real-estate"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Real Estate
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/ai-in-personal-wealth"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  AI in Personal Wealth
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            {/* Terms and Conditions */}
            <div>
              <h2 className="flex items-center space-x-1 mb-6 text-xl font-semibold">
                <Scale />
                <span>Terms and Conditions</span>
              </h2>
              <ul>
                <li className="mb-4">
                  <NavLink
                    to="/privacy-policy"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                        : "footer-link hover:underline hover:text-blue-400"
                    }
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/licensing"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                        : "footer-link hover:underline hover:text-blue-400"
                    }
                  >
                    Licensing
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/terms-conditions"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link hover:underline bg-blue-400 p-2 px-2 rounded-sm"
                        : "hover:underline hover:text-blue-400"
                    }
                  >
                    Terms &amp; Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Get Help */}
            <div>
              <h2 className="flex items-center space-x-1 mb-6 text-xl font-semibold pt-6">
                <HandHelping /> <span>Get Help</span>
              </h2>
              <ul>
                <li className="mb-4 text-base">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                        : "footer-link hover:underline hover:text-blue-400"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="contact-us"
                    className={({ isActive }) =>
                      isActive
                        ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                        : "footer-link hover:underline hover:text-blue-400"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/career"
                    className={({ isActive }) =>
                      isActive
                        ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                        : "footer-link hover:underline hover:text-blue-400"
                    }
                  >
                    Careers
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                        : "footer-link hover:underline hover:text-blue-400"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* //Follow Us */}
          <div>
            <h2 className="flex items-center space-x-1 mb-6 text-xl font-semibold">
              <Share2 />
              <span>Follow Us</span>
            </h2>
            <ul>
              <li className="mb-4">
                <NavLink
                  to="https://wa.me/7030640807"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  WhatsApp
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="twitter"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Twitter
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="https://www.instagram.com/kfinance_office"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Instagram
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="https://www.t.me/kfinance_office"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Telegram
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Download App */}
          <div>
            <h2 className="flex items-center space-x-1 mb-6 text-xl">
              <Download />
              <span>Download App</span>
            </h2>
            <ul className="font-medium">
              <li className="mb-4">
                <NavLink
                  to="/ios"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "hover:underline hover:text-blue-400"
                  }
                >
                  iOS
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/android"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Android
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/windows"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Windows
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/macos"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  MacOS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyrights */}
        <div className="px-4 py-6 bg-black flex flex-col space-y-3 md:flex md:items-center md:justify-between">
          <span className="text-base text-center flex items-center space-x-2 sm:text-center">
            <span className="flex items-center space-x-2">
              <span>All Rights Reserved.</span>
              <span className="flex items-center">
                <Copyright size={16} />
                2024
              </span>
            </span>
            <a href={import.meta.env.VITE_FRONTEND_URL}>
              {import.meta.env.VITE_WEBSITE_NAME}.
            </a>
          </span>
          <ShareUs />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
