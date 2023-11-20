import express from 'express';
import GithubControllers from '../controllers/githubControllers.js';
const router = express.Router();

router.get('/github', GithubControllers.getGithubUser);

export default router;