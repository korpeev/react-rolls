import { OrderByDirection } from "firebase/firestore";

export type Product = {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
  rate: string;
  description: string;
};
export interface Cart extends Product {
  count?: number;
}

export type OrderOption = {
  field: string;
  type: OrderByDirection;
};
