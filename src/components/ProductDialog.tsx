import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Product } from "../types/chat";

interface ProductDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export function ProductDialog({
  isOpen,
  onClose,
  product,
}: ProductDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-lg font-semibold">£{product.price.toFixed(2)}</p>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
