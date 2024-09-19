import mongoose from 'mongoose';

const shiftSchema = new mongoose.Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    idDate: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Date',
    },
  },
  { versionKey: false }
);

export { shiftSchema };
