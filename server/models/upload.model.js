import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
    {
        photo: {
            type: String
        },
        title: {
            type: String
        },
        description: {
            type: String
        }
    },
    { timestamps: true }
)
export const File = mongoose.model('File', fileSchema)