import {IAddOn, ISize} from '../meals/models';

export interface IOrder {
  id: any;
  status: string;
  image: any;
  name: string;
  size: ISize;
  addons: IAddOn[];
  quantity: number;
  price: number;
}

export interface IOvenPayload {
  ovenList: any;
  error?: string;
}

export interface IOrderPayload {
  order: IOrder;
  ovenList?: IOrder[];
  error?: string;
}

export interface OvenInitialState {
  ovenList: IOrder[];
  loading: boolean;
  error: string;
}
