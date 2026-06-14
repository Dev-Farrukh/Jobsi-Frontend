import mongoose from "mongoose";
import variables from "./config.js";

const db_configuration = async () => {
    try {
        await mongoose.connect(variables.MONGO_URI)
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        throw new Error (`Error while connecting: ${error}`);
        
    }
}

export default db_configuration