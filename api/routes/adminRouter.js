import express from "express";
const router = express.Router();
import { adminLogin, getUsers, getCars, blockUser, addCar } from "../controller/adminController.js";
import { verifyAdminToken } from "../middleware/adminAuth.js";
import upload from "../utils/multer.js";



router.post("/login",adminLogin);

router.get("/users",verifyAdminToken,getUsers);

router.get("/cars",verifyAdminToken,getCars);

router.get("/blockUser/:id",verifyAdminToken,blockUser);

router.post('/addCar',upload.single('image'),verifyAdminToken,addCar);

export default router;