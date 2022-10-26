import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string()
    .min(3, { message: 'Must be 5 or more characters long' }),
  year: z.number()
    .int()
    .positive()
    .gte(1900)
    .lte(2022),
  color: z.string()
    .min(3, { message: 'Must be 5 or more characters long' }),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof vehicleZodSchema>;

// export default IVehicle;
export { vehicleZodSchema };

// export interface IVehicle {
//   model:string,
//   year:number,
//   color:string,
//   status?:boolean,
//   buyValue:number,
// }