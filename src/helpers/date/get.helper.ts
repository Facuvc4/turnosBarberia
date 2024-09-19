import mongoose from 'mongoose';
import dateModel from '../../models/date.model';

const main = async (idDate: mongoose.Schema.Types.ObjectId) => {
  const result = await dateModel.findOne({ _id: idDate });
  return result;
};

export default main;
