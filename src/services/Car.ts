import { IService } from '../interfaces/IService';
import { ICar, carZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  // quando fazemos IService<ICar> acima 
  // estamos implementando a interface com o tipo ICar com o parâmetro genérico
  private _car:IModel<ICar>;
  // o mesmo fazemos aqui com a interface do Model
  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    // console.log(obj);
    // recebemos uma variável qualquer, e garantimos que ela é um objeto com formato correto utilizando o zod
    const parsed = carZodSchema.safeParse(obj);

    // agora, caso os tipos estejam errados (success = false), nós lançaremos um erro
    if (!parsed.success) {
      throw parsed.error; // vamos falar sobre como esse erro tratá-lo logo logo
    }
    return this._car.create(obj);
  }

  public async readOne(_id:string):Promise<ICar> {
    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async read(): Promise<ICar[]> {
    const car = await this._car.read();
    return car;
  }
  
  public async update(_id: string, obj: ICar): Promise<ICar | null> { // AQUI AVIA DADO PROBLEMA.
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    // const { model, year, color, buyValue, doorsQty, seatsQty } = obj;
    // const car = { model, year, color, buyValue, doorsQty, seatsQty };
    const update = await this._car.update(_id, parsed.data); // AQUI FOI TROCADO PARA UM OBJ NO PARAMETRO.
    if (!update) throw new Error(ErrorTypes.EntityNotFound);

    return update;
  }

  public async delete(_id: string): Promise<ICar | null> {
    const car = await this._car.delete(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;  
  }
}

export default CarService;
// RESOLVIDO OS CONFLITOS NESTE ARQUIVOS.