export interface ProductType {
  id: number;
  name: string;
  price: number;
  stock: 'in-stock' | 'out-of-stock';
  description: string;
  discount: number;
  category: string;
  originalPrice: number;
}