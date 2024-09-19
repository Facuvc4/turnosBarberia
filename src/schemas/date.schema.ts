import mongoose from 'mongoose';

const dateSchema = new mongoose.Schema(
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

export { dateSchema };
