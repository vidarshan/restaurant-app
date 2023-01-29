import {IAddOn, ISize} from '../meals/models';

export interface IOrder {
  status: string;
  image: any;
  name: string;
  size: ISize;
  addons: IAddOn[];
  quantity: number;
  price: number;
}
