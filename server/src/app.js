import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const allowedOrigins = [
  "http://192.168.31.18:5173", // Mobile-accessible frontend
  "http://localhost:5173", // PC-accessible frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//Import routes
import userRegisterRoute from "./routes/User.routes.js";
import authSessionRoute from "./routes/Auth.routes.js";
import contactListRoute from "./routes/ContactList.route.js";
//Defining routes

app.use("/api/v1/user", userRegisterRoute);
app.use("/api/v1/session", authSessionRoute);

app.use("/api/v1/contact-list", contactListRoute);

app.get("/", (req, res) => {
  res.send("This is home Page!");
});

export default app;
