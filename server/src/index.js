import app from "./app.js";
import dotenv from "dotenv";
import connectToDb from "./db/connectDb.js";

dotenv.config({ path: "./.env" });

connectToDb()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });

    app.on("Error", (error) => {
      console.log("🚫 Error: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Mongo DB Connection Failed !! ", err);
  });
