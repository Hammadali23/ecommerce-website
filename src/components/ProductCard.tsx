 // components/ProductCard.tsx
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="relative group cursor-pointer rounded-lg p-2">
      {product.isNew && (
        <span className="absolute top-2 left bg-green-500 text-white text-xs px-2 py-1 rounded">
          New
        </span>
      )}
      {product.onSale && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs p-4 px-2 py-1 rounded">
          Sale
        </span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:h-52 object-cover rounded-lg"
      />
      <div className="mt-4 text-center">
        <h3 className="text-lg text-start text-black">{product.name}</h3>
        <div className="text-md text-gray-600 mt-1 text-start font-bold">
          {product.onSale && product.originalPrice ? (
            <>
              <span className="mr-2">${product.originalPrice}</span>
              <span className="line-through text-gray-500">${product.price}</span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;