import { Schema, model } from "mongoose";

const savedJobSchema = new Schema(
  {
    jobseeker: { type: Schema.Types.ObjectId, ref: "User", required: true },
    job: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  },
  { timestamps: true },
);

export default model("SavedJob", savedJobSchema);
