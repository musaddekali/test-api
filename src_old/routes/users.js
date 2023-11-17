import  express  from "express";
import { homeControllers } from "../controllers/homeControllers.js";
import UserControllers from '../controllers/usersControlles.js'
const router = express.Router();

router.get("/", homeControllers);

router.get("/users", UserControllers.getAllUsers);

router.post("/users", UserControllers.createUser);

export default router;