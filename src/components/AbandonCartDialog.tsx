import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { products } from "../data/mockData";
import { useState } from "react";
import Confetti from "react-confetti";

interface AbandonCartDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onMoveToCart: () => void;
  onConfirmAbandon: () => void;
  selectedProducts: string[];
  currentCategory: string | null;
}

export function AbandonCartDialog({
  isOpen,
  onClose,
  onMoveToCart,
  onConfirmAbandon,
  selectedProducts,
  currentCategory,
}: AbandonCartDialogProps) {
  if (!currentCategory || selectedProducts.length === 0) return null;

  const currentProducts = products[
    currentCategory as keyof typeof products
  ].filter((product) => selectedProducts.includes(product.id));

  // Get suggested products from the same category (excluding selected ones)
  const suggestedProducts = products[currentCategory as keyof typeof products]
    .filter((product) => !selectedProducts.includes(product.id))
    .slice(0, 2); // Show only 2 suggestions

  const [showConfetti, setShowConfetti] = useState(false);
  const isVeganLeather = currentCategory === "animalTextures";
  const mainProduct = currentProducts[0]; // Get the first product for reference

  const handleCompletePurchase = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      onMoveToCart();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 flex flex-col max-h-[85vh]">
        <div className="overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium mb-2">
              Complete Your Sustainable Style
            </DialogTitle>
            <div className="text-gray-600 space-y-4">
              <p>
                {isVeganLeather
                  ? "Hi! Noticed you left a vegan leather piece in your cart."
                  : "Hi! We noticed you left some sustainable fashion pieces in your cart."}
              </p>
              <p>
                Want a complimentary guide on caring for your{" "}
                {isVeganLeather
                  ? "animal-free accessories"
                  : "sustainable fashion pieces"}
                —plus tips on creating a complete ethical wardrobe?
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-green-600 font-medium">
                  🌱 Special Sustainability Offer
                </p>
                <p className="mt-2">
                  Complete your purchase today and receive:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✨</span>
                    Exclusive care guide for your {mainProduct?.name}
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🎁</span>
                    10% sustainability reward on your next purchase
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📱</span>
                    Early access to upcoming sustainable collections
                  </li>
                </ul>
              </div>
            </div>
          </DialogHeader>

          {suggestedProducts.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-medium mb-3">Complete Your Look</p>
              <div className="grid grid-cols-2 gap-4">
                {suggestedProducts.map((product) => (
                  <div key={product.id} className="space-y-2">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">
                      £{product.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {showConfetti && (
          <div className="absolute inset-0 z-50 pointer-events-none">
            <Confetti
              width={600}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={200}
              gravity={0.3}
            />
          </div>
        )}
        <div className="border-t p-6 bg-white">
          <div className="space-y-3">
            <Button
              onClick={handleCompletePurchase}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
            >
              Complete Purchase & Get Rewards
            </Button>
            <button
              onClick={onConfirmAbandon}
              className="w-full text-sm text-gray-500 hover:text-gray-700"
            >
              No thanks, remove from cart
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
