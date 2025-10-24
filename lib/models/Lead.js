import { Schema, models, model } from "mongoose";
const LeadSchema = new Schema(
  {
    name: String,
    service: String,
    contactMethod: { type: String, enum: ["email", "phone"] },
    email: String,
    phone: String,
    budget: String,
    timeline: String,
    details: String,
    page: String,
    utm: Schema.Types.Mixed,
    ip: String,
    createdAt: Date,
  },
  { collection: "leads" }
);
export default models.Lead || model("Lead", LeadSchema);
