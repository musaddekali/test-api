import express from "express";
import UserControllers from "../controllers/userControllers.js";
const router = express.Router();

router.get("/users", UserControllers.getUsers);
router.get("/users/:userId", UserControllers.getUser);
router.post("/users/create", UserControllers.createUser);
router.put("/users/update", UserControllers.updateUser);
router.delete("/users/delete", UserControllers.deleteUser);

export default router;
