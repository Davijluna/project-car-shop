import { ICar } from "../../../interfaces/ICar";

const testCar: ICar = {
    model: 'Uno da Escada',
    year: 1963,
    color: 'red',
    buyValue: 3500,
    seatsQty: 2,
    doorsQty: 2
  };

const testCarId: ICar & { _id:string } = {
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Uno da Escada',
    year: 1963,
    color: 'red',
    buyValue: 3500,
    seatsQty: 2,
    doorsQty: 2 
}

export { testCar, testCarId }