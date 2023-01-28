export interface Size {
  size: string;
  content: number;
  price: number;
}

export interface AddOn {
  addOnName: string;
  addOnPrice: number;
}

export interface Meal {
  id: string;
  name: string;
  sizes: Size[];
  addons: AddOn[];
  price: number;
  foodType: string;
  image: any;
  vegan: boolean;
  orders: number;
  rating: number;
  description: string;
  ordersThisWeek: number;
}
