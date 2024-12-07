import { Button } from "@/components/ui/button";
import React from "react";
import { HandCoins, Calculator, X, User, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

function CalculatorPage() {
  const allCalculator = [
    {
      id: 1,
      name: "Fixed Deposite Calculator",
      to: "/fix-fd",
      symbol: <Calculator size={30} />,
    },
    {
      id: 2,
      name: "knowledge Guide",
      to: "/knowledgeGuide",
      symbol: <Calculator size={30} />,
    },
    {
      id: 3,
      name: "Retirement Calculator",
      to: "/login",
      symbol: <Calculator size={30} />,
    },
    {
      id: 4,
      name: "Salary Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 5,
      name: "HRA Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 6,
      name: "NPS Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 7,
      name: "Inflation Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 8,
      name: "SIP Calculator",
      to: "/login",
      symbol: <Calculator size={30} />,
    },
    {
      id: 9,
      name: "Lumpsum Calculator",
      to: "/login",
      symbol: <Calculator size={30} />,
    },
    {
      id: 10,
      name: "SWP Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 11,
      name: "Mutual Fund Calculator",
      to: "/login",
      symbol: <Calculator size={30} />,
    },
    {
      id: 12,
      name: "PPF Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 13,
      name: "EMI Calculator",
      to: "/login",
      symbol: <Calculator size={30} />,
    },
    {
      id: 14,
      name: "Credit Card EMI Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 15,
      name: "Vehicle Loan Calculator",
      to: "/login",
      symbol: <Calculator size={30} />,
    },
    {
      id: 16,
      name: "Loan Part Payment Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 17,
      name: "Hoam Loan Calculator",
      to: "/login",
      symbol: <Calculator size={30} />,
    },
    {
      id: 18,
      name: "Simple Interest Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 19,
      name: "Compound Interest Calculator",
      to: "/login",
      symbol: <Calculator size={30} />,
    },
    {
      id: 20,
      name: "Term Insurance Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
    {
      id: 20,
      name: "Step Up SIP Calculator",
      to: "/login",
      symbol: <IndianRupee size={30} />,
    },
  ];

  return (
    <div className="calculatorPage font-inter max-w-5xl mx-auto p-2 m-2 rounded-lg ">
      <h2 className="text-3xl font-bold text-black text-center mb-4 ">
        Calculators
      </h2>
      <div className="mainTypesOfCalc flex items-center justify-center space-x-3 pt-5">
        <Button>Investment</Button>
        <Button>Loans</Button>
        <Button>Others</Button>
      </div>
      <div className="subTypesOfCalc">
        <h3 className="text-center text-xl font-semibold p-2 pt-3">
          Savings & Investment Planning
        </h3>
        <div className="calList">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-2">
            {allCalculator.map((ele, index) => (
              <Link
                key={index}
                to={ele.to}
                className="p-5 bg-white rounded-lg flex items-center justify-center space-x-3  shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span>{ele.symbol}</span>
                <span>{ele.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorPage;
