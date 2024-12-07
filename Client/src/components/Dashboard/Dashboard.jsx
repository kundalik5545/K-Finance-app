import axios from "axios";
import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { LogInContext } from "@/App";
function Dashboard() {
  const { isLoggedIn, user } = useContext(LogInContext);
  const [data, setData] = useState("");

  const handleOnClick = () => {
    setData(user);
  };

  return (
    <div className="bg-purple-100 p-2 m-2 rounded-lg min-h-screen">
      <h2 className="text-xl">
        This is the Dashboard, visible only if the user is logged in.
      </h2>
      <Button onClick={handleOnClick}>Fetch Details</Button>

      <div className="mt-4">
        <h3>User Data:</h3>

        <p>{`User First Name:-  ${data.firstName}`}</p>
        <p>{`User Last Name:-  ${data.lastName}`}</p>
        <p>{`User Email:-  ${data.email}`}</p>
        <p>{`User Phone:-  ${data.phone}`}</p>
        <p>{`User UserName:-  ${data.userName}`}</p>
      </div>
    </div>
  );
}

export default Dashboard;
