import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { products } from "../data/mockData";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Confetti from "react-confetti";

interface SmartCartDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: string[];
  currentCategory: string | null;
  onMoveToCart: () => void;
  onCloseAttempt: () => void;
}

interface CartItem {
  id: string;
  quantity: number;
}

export function SmartCartDialog({
  isOpen,
  selectedProducts,
  currentCategory,
  onMoveToCart,
  onCloseAttempt,
}: SmartCartDialogProps) {
  if (!currentCategory || selectedProducts.length === 0) return null;

  const [cartItems, setCartItems] = useState<CartItem[]>(
    selectedProducts.map((id) => ({ id, quantity: 1 }))
  );
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClose = () => {
    onCloseAttempt();
  };

  const handleQuantityChange = (productId: string, change: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + change); // Prevent going below 1
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const currentProducts = products[
    currentCategory as keyof typeof products
  ].filter((product) => selectedProducts.includes(product.id));

  const handleMoveToCartWithEffects = () => {
    setShowConfetti(true);
    toast.success("Items moved to cart successfully!", {
      style: {
        background: "#111827",
        color: "#fff",
        borderRadius: "9999px",
      },
      position: "bottom-center",
      duration: 2000,
      className: "z-[100]", // Higher z-index than the sheet
    });
    setTimeout(() => {
      setShowConfetti(false);
      onMoveToCart();
    }, 2000);
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        containerStyle={{
          bottom: "20px",
          zIndex: 100000, // Very high z-index to ensure it's above everything
        }}
      />
      <Sheet open={isOpen} onOpenChange={handleClose}>
        <SheetContent className="w-[400px] sm:w-[450px] overflow-hidden p-0 flex flex-col">
          {showConfetti && (
            <div className="absolute inset-0 z-50 pointer-events-none">
              <Confetti
                width={450}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={200}
                gravity={0.3}
              />
            </div>
          )}
          <SheetHeader className="p-4 border-b">
            <SheetTitle>Your Smart Cart</SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {currentProducts.map((product) => {
              const cartItem = cartItems.find((item) => item.id === product.id);
              return (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border"
                >
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">
                      {cartItem?.quantity || 1}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center justify-center">
                <span className="text-gray-600">
                  Need help with your order?
                </span>
                <button className="ml-2 text-gray-900 font-medium flex items-center">
                  <span className="mr-1">📞</span> Talk to expert
                </button>
              </div>
            </div>
          </div>

          <div className="border-t p-4">
            <Button
              onClick={handleMoveToCartWithEffects}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg"
            >
              Move to Cart
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
