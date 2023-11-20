import express from 'express';
import HomeControllers from '../controllers/homeControler.js';
const router = express.Router();

router.get('/', HomeControllers.getHome);

export default router;