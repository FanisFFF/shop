export type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};
export type DirectoryItem = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};
export type CartItem = CategoryItem & {
  quantity: number;
};
