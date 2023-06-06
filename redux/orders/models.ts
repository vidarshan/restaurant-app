import {IAddOn} from '../meals/models';

export {};

export interface IOrderItemDetails {
  id: string;
  price: number;
  image: any;
  quantity: number;
  addOns: IAddOn[];
  loading: boolean;
  error: boolean;
}

export interface IOrderItemDetailsPayload {
  id: any;
  price: number;
  date: any;
  status: string;
  items: any[];
}
