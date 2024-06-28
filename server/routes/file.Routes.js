import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { deleteFile, downloadFile, getAllFiles, uploadFile } from "../controllers/fileUpload.controllers.js";

const router = express.Router()

router.post('/upload', upload.single("file"), uploadFile);

router.get('/files', getAllFiles);

router.get('/download/:filename', downloadFile);

router.delete('/delete/:filename', deleteFile);

export default router;