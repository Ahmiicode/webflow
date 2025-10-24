import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    service: { type: String },
    budget: { type: String },
    timeline: { type: String },
    message: { type: String, required: true },
    page: { type: String, default: "contact" },
  },
  { timestamps: true }
);

// Avoid model overwrite error in Next.js
export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
