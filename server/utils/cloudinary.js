import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({
    cloud_name: process.env.Cloudinary_Cloud_Name,
    api_key: process.env.Cloudinary_API_Key,
    api_secret: process.env.Cloudinary_API_Secret,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        // Check for file path
        if (!localFilePath) {
            return null;
        }

        //Upload the file on cloudinary
        const response = await cloudinary.uploader
            .upload(localFilePath, { resource_type: "auto" })

        return response.url;

    } catch (error) {
        console.log(error);
    }
}

export { uploadOnCloudinary }