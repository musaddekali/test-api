import  express  from "express";
import githubControllers from "../controllers/githubControllers.js";
const router = express.Router();

router.get("/github", githubControllers);

export default router;