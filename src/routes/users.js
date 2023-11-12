import  express  from "express";
import { homeControllers } from "../controllers/homeControllers.js";
import { usersControllers } from "../controllers/usersControlles.js";
import { usersPostControllers } from "../controllers/usersPostControllers.js";
const router = express.Router();

router.get("/", homeControllers);

router.get("/users", usersControllers);

router.post("/users", usersPostControllers);

export default router;