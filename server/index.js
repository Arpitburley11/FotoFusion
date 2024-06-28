import express from 'express';
import 'dotenv/config';
import cors from "cors";
import fileupload from './routes/file.Routes.js'
import mongoose from 'mongoose';

const app = express();
app.use(cors())

app.use('/api/file', fileupload)

app.get('/api', (req, res) => {
    res.send("Hello I'm server")
})

mongoose.connect(process.env.Mongo_URL)
    .then(() => {
        console.log("Database connected successfully.")
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err)
    })