import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/uploader.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "cbc-skill-tracker/evidence",
    allowed_formats: ["jpg", "jpeg", "png", "pdf"]
  }
});

export const upload = multer({ storage });
