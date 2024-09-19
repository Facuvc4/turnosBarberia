import mongoose from 'mongoose';
import { shiftSchema } from '../schemas/shift.schema';

const shiftModel = mongoose.model('Shift', shiftSchema);

export default shiftModel;
