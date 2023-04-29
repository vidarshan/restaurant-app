export interface ISize {
  size: string;
  content: number;
  price: number;
}

export interface IAddOn {
  addOnName: string;
  addOnPrice: number;
}

export interface IMeal {
  id: string;
  name: string;
  sizes: ISize[];
  addons: IAddOn[];
  price: number;
  foodType: string;
  image: string;
  vegan: boolean;
  orders: number;
  rating: number;
  description: string;
  ordersThisWeek: number;
}
