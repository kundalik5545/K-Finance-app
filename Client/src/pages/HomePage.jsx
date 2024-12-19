import { Button } from "@/components/ui/button";
import { IndianRupee, UserPlus, LogIn } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogInContext } from "../App";
import {
  featuresData,
  statsData,
  howItWorksData,
  testimonialsData,
  iconMap,
} from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/Hero";

const websiteName = import.meta.env.VITE_WEBSITE_NAME;

function HomePage() {
  const { isLoggedIn, user } = useContext(LogInContext);
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      {/* <div className="HomePage-Main  w-full font-inter text-center text-white bg-black m-0 md:m-1 rounded-2xl md:rounded-xl flex flex-col items-center justify-start pt-24">
        <h1 className="flex flex-wrap items-center justify-center space-x-1 space-y-3 sm:space-y-0 pb-8 md:pb-14">
          <span className="text-5xl md:text-7xl font-bold">Welcome to </span>
          <span className="flex items-center">
            <IndianRupee size={80} color="orange" />
            <span className="text-5xl md:text-7xl font-bold text-blue-600">
              {websiteName}
            </span>
          </span>
        </h1>

        <p className="flex flex-col p-2 md:pt-5 pb-4 md:pb-14 space-y-15">
          <span className="text-gray-600 text-2xl pb-5">
            All In #1 Finance Management Application.
          </span>
          <span className="text-3xl md:text-4xl font-semibold">
            <span>Track, Save, Invest, Grow Your Wealth On</span>
            <br className="md:hidden" />
            <span className="text-blue-200 text-4xl md:text-4xl pt-2 md:pt-0">
              {websiteName}
            </span>
          </span>
        </p>

        <div className="acc-open">
          <button
            onClick={() => navigate("/sign-up")}
            className="text-xl bg-green-700 p-3 rounded-xl font-medium"
          >
            Open Account Now...
          </button>
        </div>

        <section className="homepage-login-signup pt-5">
          {isLoggedIn ? (
            <p>
              Welcome {user.firstName} to {websiteName}.
            </p>
          ) : (
            <div className="menu-login-btn flex items-center justify-evenly sm:justify-center space-x-5 pt-4 lg:hidden">
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
          )}
        </section>
      </div> */}

      {/* Hero Section */}
      <HeroSection />

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map(({ iconName, title, description }, index) => {
              const IconComponent = iconMap[iconName];
              return (
                <Card className="p-6" key={index}>
                  <CardContent className="space-y-4 pt-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map(({ iconName, title, description }, index) => {
              const IconComponent = iconMap[iconName];
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link to="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
