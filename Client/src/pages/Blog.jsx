import KnowledgeSection from "@/components/Blog/knowledgeSection";
import { User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomCard from "@/components/ShadcnImports/BlogPostCard";
import { Button } from "@/components/ui/button";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      Title: "Mastering Your Finances: Top Tips for Effective Expense Tracking",
      shortDesc:
        "Learn practical strategies to track your expenses efficiently and take control of your financial future.",
      links: "https://tailwindcss.com/docs/text-indent",
      blogPostImg: "./public/Images/Img01.jpg",
    },
    {
      id: 2,
      Title:
        "From Red to Black: How to Use Budget Apps to Transform Your Financial Health",
      shortDesc:
        "Discover the best budgeting apps that can help you manage your money, reduce debt, and build savings.",
      links: "https://tailwindcss.com/docs/text-indent",
      blogPostImg: "./public/Images/Img02.jpg",
    },
    {
      id: 3,
      Title:
        "The Ultimate Guide to Creating a Personal Budget (And Sticking to It!)",
      shortDesc:
        "Step-by-step guide to setting up a personal budget, staying on track, and achieving your financial goals.",
      links: "https://tailwindcss.com/docs/text-indent",
      blogPostImg: "./public/Images/Img03.jpg",
    },
    {
      id: 4,
      Title:
        "Unlocking the Power of Financial Journals: A Path to Better Money Management",
      shortDesc:
        "Learn how keeping a financial journal can improve your money management skills and lead to smarter financial decisions.",
      links: "https://tailwindcss.com/docs/text-indent",
      blogPostImg: "./public/Images/Img04.jpg",
    },
    {
      id: 5,
      Title: "Mastering Your Finances: Top Tips for Effective Expense Tracking",
      shortDesc:
        "Learn practical strategies to track your expenses efficiently and take control of your financial future.",
      links: "https://tailwindcss.com/docs/text-indent",
      blogPostImg: "./public/Images/Img01.jpg",
    },
    {
      id: 6,
      Title:
        "From Red to Black: How to Use Budget Apps to Transform Your Financial Health",
      shortDesc:
        "Discover the best budgeting apps that can help you manage your money, reduce debt, and build savings.",
      links: "https://tailwindcss.com/docs/text-indent",
      blogPostImg: "./public/Images/Img02.jpg",
    },
    {
      id: 7,
      Title:
        "The Ultimate Guide to Creating a Personal Budget (And Sticking to It!)",
      shortDesc:
        "Step-by-step guide to setting up a personal budget, staying on track, and achieving your financial goals.",
      links: "https://tailwindcss.com/docs/text-indent",
      blogPostImg: "./public/Images/Img03.jpg",
    },
    {
      id: 8,
      Title:
        "Unlocking the Power of Financial Journals: A Path to Better Money Management",
      shortDesc:
        "Learn how keeping a financial journal can improve your money management skills and lead to smarter financial decisions.",
      links: "https://tailwindcss.com/docs/text-indent",
      blogPostImg: "./public/Images/Img04.jpg",
    },
  ];
  return (
    <div className="container max-w-5xl p-3 mx-auto font-inter">
      <div className="top-sec flex items-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-4">Blog</h2>
        <div className="filter flex  items-center justify-center space-x-2 p-2 pb-4">
          <Button variant="link">Finance</Button>
          <Button variant="link">Insurance</Button>
          <Button variant="link">Real Estate</Button>
          <Button variant="link">Credit Card</Button>
          <Button variant="link">Stocks</Button>
          <Button variant="link">Ai</Button>
          <Button variant="link">Knowledge</Button>
          <Button variant="link">Gold & Silver</Button>
        </div>
      </div>
      <div className="calList">
        <div className="blog-posts grid grid-cols-1 sm:grid-cols-3 gap-3">
          {blogPosts.length > 0 &&
            blogPosts.map((ele) => (
              <CustomCard
                key={ele.id}
                cardImg={ele.blogPostImg}
                title={ele.Title}
                description={ele.shortDesc}
                blogLink={ele.links}
              />
            ))}
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
