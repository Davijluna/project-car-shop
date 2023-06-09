export interface IService<T> {
  create(obj:unknown):Promise<T>,
  read():Promise<T[]>,
  readOne(_id:string):Promise<T>,
  update(_id:string, obj:T):Promise<T | null>, // este null foi acrescentado logo depois.
  delete(_id:string):Promise<T | null>,
}