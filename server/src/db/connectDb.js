import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MongoDB_URI}/${process.env.DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error occured during connection to MongoDb !! ", error);
    process.exit(1);
  }
};

export default connectToDb;
