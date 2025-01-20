export interface OrderType {
  id: number;
  orderId: string;
  date: string;
  amount: number;
  orderStatus: 'paid' | 'unpaid';
  deliveryStatus: 'delivered' | 'in progress';
}