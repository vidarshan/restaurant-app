export interface IOrder {
  id: string;
  name: string;
  size: string;
  qty: number;
  selectedAddOns: string[];
  price: number;
  image: any;
}
export interface IOrderScreen {
  item: IOrder;
  navigation: any;
}
