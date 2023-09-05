export interface ApiResponse {
  success: boolean;
  message: string;
  token: string;
}

export interface AdminApiResponse {
  success: boolean;
  adminToken: string;
  message: string;
}

export interface userData {
  _id? : string;
  userName: string;
  email: string;
  number?: number;
  password?: string;
  isBlocked? : boolean;
}

export interface carData {
  _id: string;
  make_id: string;
  model: string;
  year: number;
  color: string;
  price: number;
  image: string;
}


