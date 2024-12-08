import axios from "axios";
import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { LogInContext } from "@/App";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Shield,
  Briefcase,
  FileText,
  CreditCard,
  BarChart2,
  Award,
  Home,
  File,
  PlusCircle,
  IndianRupee,
} from "lucide-react";

function Dashboard() {
  const { user } = useContext(LogInContext);

  const [data, setData] = useState("");

  const handleOnClick = () => {
    setData(user);
  };

  const allItems = [
    { id: 1, items: "Stocks", icon: <DollarSign />, totalAmt: 400 },
    { id: 2, items: "NPS", icon: <Shield />, totalAmt: 2508 },
    { id: 3, items: "EPF", icon: <Briefcase />, totalAmt: 74610 },
    { id: 4, items: "PPF", icon: <FileText />, totalAmt: 5300 },
    { id: 5, items: "FD", icon: <CreditCard />, totalAmt: 8920 },
    { id: 6, items: "Mutual Funds", icon: <BarChart2 />, totalAmt: 75300 },
    { id: 7, items: "Gold & Silver", icon: <Award />, totalAmt: 84500 },
    { id: 8, items: "Real Estate", icon: <Home />, totalAmt: 23400 },
    { id: 9, items: "Bonds", icon: <File />, totalAmt: 3500 },
    { id: 10, items: "Add", icon: <PlusCircle />, totalAmt: 9400 },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 font-inter min-h-screen">
      <h2 className="text-xl">
        Welcome{" "}
        <span className="uppercase text-blue-500">{user.firstName}</span> to
        Dashboard
      </h2>

      <div className="asset-value">
        <Card className="bg-[#253660] text-white font-inter">
          <CardHeader>
            <CardTitle>MY ASSETS</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="all-assets pt-5 pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allItems.map((ele) => (
          <Link to={ele.id} key={ele.id} className="block">
            <Card className="flex flex-col items-center justify-center">
              <CardHeader className="flex m-0 p-0">
                <CardTitle className="flex items-center justify-center p-1">
                  <span>{ele.icon}</span>
                  <span>{ele.items}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex items-center">
                {<IndianRupee />} {ele.totalAmt}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Button onClick={handleOnClick}>Fetch Details</Button>

      <div className="mt-4">
        <h3>User Data:</h3>
        <p>{`User First Name: ${data.firstName}`}</p>
        <p>{`User Last Name: ${data.lastName}`}</p>
        <p>{`User Email: ${data.email}`}</p>
        <p>{`User Phone: ${data.phone}`}</p>
        <p>{`User UserName: ${data.userName}`}</p>
      </div>
    </div>
  );
}

export default Dashboard;
