import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// const allowedOrigins = [
//   process.env.CORS_ORIGIN_Front,
//   process.env.CORS_ORIGIN_Mobile,
//   process.env.CORS_ORIGIN,
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     methods: ["POST", "GET", "DELETE"],
//     credentials: true,
//   })
// );
app.use(
  cors({
    // origin: `${process.env.CORS_ORIGIN_FRONTEND_URL}`,
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
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
