import path from 'path';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { File } from '../models/upload.model.js';
import fs from 'fs';

export const uploadFile = async (req, res) => {
    const data = req.body;
    const file = req.file;
    const fileName = file.originalname;
    const filePath = path.join("uploads", fileName);

    try {
        const upload = await uploadOnCloudinary(filePath);
        if (upload) {
            const saveFile = await File.create({
                photo: upload,
                title: data.title,
                description: data.description
            });
        } else {
            res.send("Uploading Failed.");
        }
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Error removing file: ${err}`);
                return;
            }
        })
    }
    catch (err) {
        console.log(err);
    }
    res.send("Successfully Uploaded.");
}

export const getAllFiles = async (req, res) => {
    try {
        const files = await File.find();
        res.send(files);
    }
    catch (err) {
        console.log(err);
    }
}

export const downloadFile = (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, "uploads", fileName);

    try {
        if (fs.existSync(filePath)) {
            res.sendFile(filePath);
        } else {
            res.status(400).send("File not found.");
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteFile = (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, "uploads", fileName);

    try {
        if (fs.existSync(filePath)) {
            fs.unlinkSync(filePath);
            res.sendFile("File Deleted");
        } else {
            res.status(400).send("File not found.");
        }
    } catch (error) {
        console.log(error);
    }
}