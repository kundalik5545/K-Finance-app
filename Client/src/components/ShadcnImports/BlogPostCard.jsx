import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const BlogPostCard = ({ cardImg, title, description, blogLink }) => (
  <Card className="font-inter tracking-wide shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <img src={cardImg} className="p-0 rounded-sm  rounded-b-xl pb-1" />
    <div className="Card-Containt  rounded-b-lg flex-grow flex flex-col hover:bg-blue-100">
      <CardHeader className="">
        <CardTitle className="text-lg md:text-xl lg:text-xl font-bold tracking-normal leading-snug">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm md:text-base lg:text-lg text-gray-700">
          <p>{description}</p>
          <Link
            to={blogLink}
            className="text-sm md:text-base text-blue-500 hover:text-blue-700 underline"
          >
            Read More...
          </Link>
        </CardDescription>
      </CardContent>
    </div>
  </Card>
);

export default BlogPostCard;
