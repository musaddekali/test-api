import express from "express";
import UserControllers from "../controllers/userControllers.js";
const router = express.Router();

router.get("/users", UserControllers.getUsers);
router.get("/user/:userId", UserControllers.getUser);
router.post("/user/create", UserControllers.createUser);
router.put("/user/update", UserControllers.updateUser);
router.delete("/user/delete", UserControllers.deleteUser);

export default router;
