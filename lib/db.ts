import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
    if(cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: true, // Disable mongoose's buffering of commands
            maxPoolSize:10 // Use the new Server Discover and Monitoring engine

        }
        mongoose.connect(MONGODB_URI,opts )
        .then(()=> mongoose.connection)
    }
    try {
       cached.conn = await cached.promise;
       console.log("Connected to MongoDB successfully"); 
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
        
    }
    return cached.conn;
        
}