import express from 'express';
import FileControllers from '../controllers/FileControllers.js';
const router = express.Router();

router.get('/file/:name', FileControllers.getImage);
router.get('/file/text/mahid', FileControllers.getFileText);

export default router;