import mongoose from 'mongoose';
import { dateSchema } from '../schemas/date.schema';

const dateModel = mongoose.model('Date', dateSchema);

export default dateModel;
