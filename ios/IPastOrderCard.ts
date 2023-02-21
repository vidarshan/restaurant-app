import {IAddOn} from '../models/IAddOn';

export interface IPastOrderCard {
  id: string;
  name: string;
  price: number;
  image: any;
  quantity: number;
  addOns: IAddOn[];
  date: any;
  status: string;
}
