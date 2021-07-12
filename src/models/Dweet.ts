import mongoose from "mongoose";

interface Dweet {
  dweet: string;
  posted_by: string;
  last_updated_at: string;
}

const DweetSchema = new mongoose.Schema<Dweet>({
  dweet: {
    type: String,
    required: true,
    minlength: 140,
    maxlength: 140,
  },
  posted_by: {
    type: String,
    required: true,
  },
  last_updated_at: {
    type: Date,
    default: Date.now,
  },
});

DweetSchema.pre("updateOne", (next) => {
  const now = new Date();
  (this as any).set({ last_updated_at: now });
  next();
});

export default mongoose.model<Dweet>("Dweets", DweetSchema);
