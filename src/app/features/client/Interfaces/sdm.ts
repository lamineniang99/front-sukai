import { Perimetre } from "./perimetre";

export interface Sdm {
  associated: boolean;
  position : number ;
  perimetreIds : Perimetre[] ;
  _id: string;
  __v: number;
}
