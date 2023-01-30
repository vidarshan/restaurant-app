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
