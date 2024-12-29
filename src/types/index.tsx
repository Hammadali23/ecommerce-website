export interface Product {
    id: number;
    name: string;
    price: number;         // Numeric price
    image: string;         // Image URL
    isNew?: boolean;       // Optional: indicates if the product is new
    onSale?: boolean;      // Optional: indicates if the product is on sale
    originalPrice?: number; // Optional: original price for comparison
  }
  