import foodModel from "../models/foodModel.js";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// helper to upload buffer -> Cloudinary
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "food-items" }, // optional folder in Cloudinary
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

// Add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    // upload image buffer to Cloudinary
    const result = await uploadToCloudinary(req.file.buffer);

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: result.secure_url, // save Cloudinary URL instead of filename
    });

    await food.save();
    res.json({ success: true, message: "Food item added successfully", food });
  } catch (error) {
    console.error("Error adding food item:", error);
    res.json({ success: false, message: "Failed to add food item", error });
  }
};

// List food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("Error listing food items:", error);
    res.json({ success: false, message: "Failed to list food items", error });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    // Optional: remove image from Cloudinary if you store public_id
    // const publicId = food.image.split("/").pop().split(".")[0];
    // await cloudinary.uploader.destroy("food-items/" + publicId);

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    console.error("Error removing food item:", error);
    res.json({ success: false, message: "Failed to remove food item", error });
  }
};

export { addFood, listFood, removeFood };
