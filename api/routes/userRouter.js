import express from "express";
const router = express.Router();
import { verifyUserToken } from "../middleware/userAuth.js";
import {registerUser, userLogin, getCars, userDetails, updateDetails, getCargetails } from "../controller/userController.js";


router.post("/register", registerUser);

router.post("/login", userLogin);

router.get("/cars",getCars);

router.get("/details/:id",userDetails);

router.post("/update/:id", updateDetails);

router.get("/carDetails/:id", getCargetails);

export default router;