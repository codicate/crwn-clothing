export interface Item {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

export interface Collection {
  id: string;
  title: string;
  routeName: string;
  items: Item[];
}