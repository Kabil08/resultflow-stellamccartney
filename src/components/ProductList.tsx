import { Check } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductListProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onSelect: (productId: string) => void;
  selectedProducts: string[];
  onAddToCart?: () => void;
  disableSelection?: boolean;
}

export function ProductList({
  title,
  subtitle,
  products,
  onSelect,
  selectedProducts,
  onAddToCart,
  disableSelection = false,
}: ProductListProps) {
  // Calculate total savings
  const totalPrice = selectedProducts.reduce(
    (total, id) => total + products.find((p) => p.id === id)!.price,
    0
  );
  const savings = totalPrice * 0.2; // 20% savings

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      // If all are selected, unselect all
      products.forEach((p) => onSelect(p.id));
    } else {
      // Select all unselected products
      products
        .filter((p) => !selectedProducts.includes(p.id))
        .forEach((p) => onSelect(p.id));
    }
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart();
    }
  };

  return (
    <div className="space-y-4">
      {/* Title Section */}
      <div className="mb-4">
        <h2 className="text-[17px] font-medium flex items-center gap-2 text-gray-700">
          ✨ {title}
        </h2>
        {subtitle && (
          <p className="text-[15px] text-gray-600 mt-1.5">{subtitle}</p>
        )}
      </div>

      {/* Select All Products */}
      {!disableSelection && (
        <button onClick={handleSelectAll} className="w-full text-left">
          <div className="px-4 py-3 rounded-xl bg-white border border-gray-200">
            <div className="flex items-center gap-3">
              <div
                className={`w-[18px] h-[18px] border rounded flex items-center justify-center ${
                  products.every((p) => selectedProducts.includes(p.id))
                    ? "border-gray-700 bg-gray-900"
                    : "border-gray-300"
                }`}
              >
                {products.every((p) => selectedProducts.includes(p.id)) && (
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                )}
              </div>
              <span className="text-[15px] text-gray-700">
                Select All Products
              </span>
            </div>
          </div>
        </button>
      )}

      {/* Product List */}
      <div className="space-y-3">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => !disableSelection && onSelect(product.id)}
            className={`w-full text-left ${
              disableSelection ? "pointer-events-none" : ""
            }`}
          >
            <div className="px-4 py-3 rounded-xl bg-white border border-gray-200">
              <div className="flex items-start gap-4">
                <div
                  className={`w-[18px] h-[18px] mt-1 border rounded flex items-center justify-center ${
                    selectedProducts.includes(product.id)
                      ? "border-gray-700 bg-gray-900"
                      : "border-gray-300"
                  }`}
                >
                  {selectedProducts.includes(product.id) && (
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  )}
                </div>
                <div className="w-[72px] h-[72px] rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-[15px] text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <p className="text-[17px] text-gray-700 mt-2">
                    £{product.price.toFixed(2)}/mo
                  </p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Bundle Offer and Add to Cart */}
      {selectedProducts.length > 0 && (
        <div className="mt-4 space-y-3">
          {/* Savings Info */}
          <div className="text-[15px] text-green-600">
            ✨ Save 20% (£{savings.toFixed(2)})
          </div>

          {/* Bundle Price Info */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-[15px] text-gray-500">
              <span>Original Price:</span>
              <span>£{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[15px] text-green-600">
              <span>Bundle Savings:</span>
              <span>-£{savings.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[17px] font-medium text-gray-900 pt-2 border-t">
              <span>Bundle Total:</span>
              <span>£{(totalPrice - savings).toFixed(2)}</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-gray-900 text-white text-[15px] font-medium rounded-xl hover:bg-gray-800 transition-colors"
          >
            Add Bundle to Cart
          </button>
        </div>
      )}
    </div>
  );
}
