import { User } from "./user";

export interface PesponseLogin {
  status : number,
  data : {user : User, token : string},
  message : string
}
