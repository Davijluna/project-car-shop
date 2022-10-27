import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

type ICar = z.infer<typeof carZodSchema>;

// export default ICar;
export { ICar, carZodSchema };

// export interface ICar extends IVehicle{
//   doorsQty:number,
//   seatsQty:number,
// }