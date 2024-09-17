import mongoose from 'mongoose';

export const dateSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    initHour: {
      type: Number,
      required: true,
    },
    endHour: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false }
);
