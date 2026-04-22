import { Schema, model } from "mongoose";

const analyticsSchema = new Schema(
  {
    employer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalJobsPosted: { type: Number, default: 0 },
    totalApplicationReceived: { type: Number, default: 0 },
    totalHired: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default model("Analytics", analyticsSchema);
