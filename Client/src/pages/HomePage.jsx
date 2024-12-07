import { Button } from "@/components/ui/button";
import { IndianRupee, Wallet, MenuIcon, UserPlus, LogIn } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogInContext } from "../App";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const websiteName = import.meta.env.VITE_WEBSITE_NAME;

function HomePage() {
  const options = [1, 2, 3, 4];
  const { isLoggedIn, user } = useContext(LogInContext);
  const navigate = useNavigate();
  return (
    <div className="HomePage">
      <div className="HomePage-Main min-h-screen w-full font-inter text-center text-white bg-black m-0 md:m-1 rounded-2xl md:rounded-xl flex flex-col items-center justify-start pt-24  ">
        <h1 className="flex flex-wrap items-center justify-center space-x-1 space-y-3 sm:space-y-0 pb-8 md:pb-14">
          <span className="text-5xl md:text-7xl font-bold">Welcome to </span>
          <span className="flex items-center">
            <IndianRupee size={80} color="orange" />
            <span className="text-5xl md:text-7xl font-bold text-blue-600">
              {websiteName}
            </span>
          </span>
        </h1>
        {/* Info */}
        <p className="flex flex-col p-2 md:pt-5 pb-4 md:pb-14 space-y-15">
          <span className="text-gray-600 text-2xl pb-5">
            All In #1 Finance Management Application.
          </span>
          <span className="text-3xl md:text-4xl font-semibold">
            <span>Track, Save, Invest, Grow Your Wealth On</span>{" "}
            <br className="md:hidden" />
            <span className="text-blue-200 text-4xl md:text-4xl pt-2 md:pt-0">
              {websiteName}
            </span>
          </span>
        </p>
        {/* logo  */}
        <div className="acc-open">
          <button
            onClick={() => navigate("/sign-up")}
            className="text-xl bg-green-700 p-3 rounded-xl font-medium"
          >
            Open Account Now...
          </button>
        </div>

        {/* Login-singup  button*/}
        <div className="homepage-login-signup pt-5">
          {isLoggedIn ? (
            <>
              <p>
                Welcome {user.firstName} to {websiteName}.
              </p>
            </>
          ) : (
            <>
              <div className="menu-login-btn flex items-center justify-evenly sm:justify-center space-x-5 pt-4 lg:hidden ">
                <Link to="sign-up">
                  <Button size="lg">
                    <UserPlus /> Sign Up
                  </Button>
                </Link>
                <Link to="login">
                  <Button size="lg">
                    <LogIn />
                    Login
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Extra info */}
      <div className="second-sec bg-white w-full min-h-fit flex flex-col items-center justify-center p-10">
        <h3 className="text-2xl md:text-2xl lg:text-6xl font-bold text-center mb-6">
          Let’s know what you can <br />
          do with {websiteName}.
        </h3>
        <p className="text-center text-xl md:text-2xl lg:text-2xl max-w-5xl">
          Invest in Indian Stocks, US Stocks, Direct Mutual Funds, and Fixed
          Deposits. Set up your financial goals and link them with your
          investments on {websiteName}.
        </p>
      </div>

      <div className="container-2 bg-black text-white  rounded-lg w-full min-h-fit flex flex-col md:flex-row items-center justify-center p-10">
        <h3 className="text-2xl md:text-2xl lg:text-6xl font-bold text-center mb-6">
          All IMP Calculators are here Testing...
        </h3>
        <p className="text-center text-xl md:text-2xl lg:text-2xl max-w-5xl">
          Invest in Indian Stocks, US Stocks, Direct Mutual Funds, and Fixed
          Deposits. Set up your financial goals and link them with your
          investments on {websiteName}.
        </p>
      </div>

      <div className="second-sec bg-white w-full min-h-fit flex flex-col items-center justify-center p-10">
        <h3 className="text-2xl md:text-2xl lg:text-6xl font-bold text-center mb-6 max-w-5xl">
          Let’s know what you can <br />
          do with {websiteName}.
        </h3>
        <p className="text-center text-xl md:text-2xl lg:text-2xl max-w-5xl">
          Invest in Indian Stocks, US Stocks, Direct Mutual Funds, and Fixed
          Deposits. Set up your financial goals and link them with your
          investments on {websiteName}.
        </p>
      </div>

      <div className="container-2 bg-black text-white  rounded-lg w-full min-h-fit flex flex-col md:flex-row items-center justify-center p-10">
        <h3 className="text-2xl md:text-2xl lg:text-6xl font-bold text-center mb-6 max-w-5xl">
          All IMP Calculators are here...
        </h3>
        <p className="text-center text-xl md:text-2xl lg:text-2xl max-w-5xl">
          Invest in Indian Stocks, US Stocks, Direct Mutual Funds, and Fixed
          Deposits. Set up your financial goals and link them with your
          investments on {websiteName}.
        </p>
      </div>

      <div className="second-sec bg-white w-full min-h-fit flex flex-col items-center justify-center p-10">
        <h3 className="text-2xl md:text-2xl lg:text-6xl font-bold text-center mb-6">
          Let’s know what you can <br />
          do with {websiteName}.
        </h3>
        <p className="text-center text-xl md:text-2xl lg:text-2xl max-w-5xl">
          Invest in Indian Stocks, US Stocks, Direct Mutual Funds, and Fixed
          Deposits. Set up your financial goals and link them with your
          investments on {websiteName}.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
