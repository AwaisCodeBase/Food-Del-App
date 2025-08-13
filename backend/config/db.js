import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://awaisfarooq_food_app:03166714@cluster0.jjlron4.mongodb.net/food_delivery_app')
    .then(() => {
        console.log("MongoDB connected successfully");
    })
}