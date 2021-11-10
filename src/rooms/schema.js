import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MessageSchema = new Schema({
  text: { type: String },
  sender: { type: String },
  timestamp: { type: Number },
  id: { type: String },
});

const RoomSchema = new Schema({
  name: { type: String, required: true },
  chatHistory: {
    type: [MessageSchema],
    required: true,
    default: [],
  },
});

export default model("Rooms", RoomSchema);
