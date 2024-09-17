import mongoose from 'mongoose';
import errorHelper from '../helpers/error.helper';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log('MongoDB connected');
  } catch (error) {
    errorHelper.internalServerError('Error connecting to DataBase');
  }
};
