import { Router } from "express";

const router = Router();
//Import routes
import {
  addNewContact,
  deleteContactList,
  getAllContacts,
} from "../controller/ContactList.controller.js";
import verifyJWT from "../middleware/VerifyJWT.midleware.js";
//Routing
router.route("/addNew").post(verifyJWT, addNewContact);
router.route("/get-contact").get(verifyJWT, getAllContacts);
router.route("/delete/:id").delete(verifyJWT, deleteContactList);

export default router;
