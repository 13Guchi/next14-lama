import mongoose from "mongoose";

const connection = {};

export async function connectToDb() {
  try {
    // if we have connection use existing one
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    // if we dont have connection create a new one
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
