import { z } from 'zod';
import { IVehicle } from './IVehicle';

const carZodSchema = z.object({
  doorsQty: z.number(),
  seatsQty: z.number(),
});

export type ICar = z.infer<typeof carZodSchema> & IVehicle;

// export default ICar;
export { carZodSchema };

// export interface ICar extends IVehicle{
//   doorsQty:number,
//   seatsQty:number,
// }