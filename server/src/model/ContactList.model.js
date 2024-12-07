// import mongoose, { Schema } from "mongoose";

// const contactListSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     userContactsDetails: [
//       {
//         contactName: {
//           type: String,
//           required: true,
//         },
//         contactPhone: {
//           type: String,
//           required: true,
//           match: [/^\d{10}$/, "Please use a valid phone number"],
//         },
//         contactEmail: {
//           type: String,
//           lowercase: true,
//           match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
//         },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// export const ContactList = mongoose.model("ContactList", contactListSchema);

import mongoose, { Schema } from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // Index for efficient user contact queries
    },
    contactName: {
      type: String,
      required: true,
    },
    contactPhone: {
      type: String,
      required: true,
      unique: true, // Enforces unique contact numbers across the collection
      match: [/^\d{10}$/, "Please use a valid phone number"],
    },
    contactEmail: {
      type: String,
      lowercase: true,
      unique: true, // Enforces unique email addresses across the collection
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);
