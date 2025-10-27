import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { ProductList } from "./ProductList";
import { products } from "../data/mockData";

interface AbandonCartSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: string[];
  currentCategory: string | null;
  onMoveToCart: () => void;
}

export function AbandonCartSheet({
  isOpen,
  onClose,
  selectedProducts,
  currentCategory,
  onMoveToCart,
}: AbandonCartSheetProps) {
  if (!currentCategory || selectedProducts.length === 0) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[450px] overflow-hidden p-0 flex flex-col">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Don't Miss Out!</SheetTitle>
          <p className="text-sm text-gray-500">
            The items in your selection are waiting for you
          </p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-4">
          <ProductList
            title="Selected Items"
            products={products[currentCategory as keyof typeof products].filter(
              (product) => selectedProducts.includes(product.id)
            )}
            selectedProducts={selectedProducts}
            onSelect={() => {}}
            disableSelection
          />
        </div>

        <div className="border-t p-4 space-y-3">
          <Button
            onClick={onMoveToCart}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white"
          >
            Move to Cart
          </Button>
          <Button onClick={onClose} variant="outline" className="w-full">
            Continue Shopping
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
