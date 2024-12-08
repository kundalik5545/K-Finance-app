import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    if (process.env.NODE_ENV == "localhost") {
      const connectionInstance = await mongoose.connect(
        `${process.env.MongoDB_URI}/${process.env.DB_NAME}`
      );
      console.log(
        `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
      );
    } else {
      const connectionInstance = await mongoose.connect(
        `${process.env.MongoDB_URI_Full}`
      );
      console.log(
        `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
      );
    }
  } catch (error) {
    console.log("Error occured during connection to MongoDb !! ", error);
    process.exit(1);
  }
};

export default connectToDb;
