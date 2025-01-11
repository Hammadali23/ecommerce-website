 // types/index.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    isNew?: boolean;
    onSale?: boolean
    originalPrice?: number;
  }
  
  export interface ProductCardProps {
    product: Product;
  }