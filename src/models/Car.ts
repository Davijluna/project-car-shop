import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MondoModel from './MongoModel';

const carMongooseSchema = new Schema<ICar>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

class Car extends MondoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}

export default Car; 
// finalizar por agora ..