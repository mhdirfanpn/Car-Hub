import { userData } from "src/app/interface";


  
  export interface userState {
    user: userData | null; // Use a union type with null
  }
  
  export const initialState: userState = {
    user: null,
  };
  