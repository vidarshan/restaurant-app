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
  id: string;
  price: number;
  image: any;
  quantity: number;
  addOns: IAddOn[];
  loading: false;
}
