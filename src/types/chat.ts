export interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
