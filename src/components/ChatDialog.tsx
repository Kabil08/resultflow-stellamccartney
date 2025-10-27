import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { ChatMessage } from "../types/chat";
import { chatResponses, products } from "../data/mockData";
import { Bot } from "lucide-react";
import { ProductList } from "./ProductList";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Toaster } from "react-hot-toast";

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatDialog({ isOpen, onClose }: ChatDialogProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: chatResponses.greeting,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [showingCart, setShowingCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCategorySelect = (category: string) => {
    setCurrentCategory(category);
    setShowingCart(false);
    setMenuOpen(false);

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: `I'm interested in the ${category} collection`,
      sender: "user",
      timestamp: new Date(),
    };

    const botResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content:
        chatResponses.productDetails[
          category as keyof typeof chatResponses.productDetails
        ],
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      let response = "";
      if (content.toLowerCase().includes("cart")) {
        setShowingCart(true);
        response = "Here's your cart. Would you like to proceed to checkout?";
      } else if (content.toLowerCase().includes("sustainable")) {
        response = chatResponses.sustainability;
      } else {
        response = chatResponses.greeting;
      }

      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const categories = [
    {
      id: "animalTextures",
      name: "Cruelty-Free Animal Textures",
      description: "Crafted without harming a single creature",
    },
    {
      id: "winterWarmers",
      name: "Winter Warmers Collection",
      description: "Cosy, cruelty-free scarves",
    },
    {
      id: "cosyEdit",
      name: "The Cosy Edit",
      description: "Sustainably crafted, insulating layers",
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[450px] overflow-hidden p-0 flex flex-col">
        <Toaster
          position="bottom-center"
          containerStyle={{
            bottom: "20px",
          }}
          toastOptions={{
            duration: 2000,
            style: {
              background: "#111827",
              color: "#fff",
              borderRadius: "9999px",
            },
          }}
        />
        <SheetHeader className="p-4 border-b shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Bot className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <SheetTitle className="text-[17px] font-medium">
                Style Assistant
              </SheetTitle>
              <p className="text-[13px] text-gray-500">
                Here to help you discover sustainable luxury
              </p>
            </div>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-xl p-3 max-w-[85%] ${
                  message.sender === "user"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100"
                }`}
              >
                {message.content.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className={`${i > 0 ? "mt-2" : ""} ${
                      line.startsWith("•") ? "ml-2" : ""
                    } text-[15px]`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {currentCategory && !showingCart && (
            <div className="mt-4">
              <ProductList
                title={
                  categories.find((c) => c.id === currentCategory)?.name || ""
                }
                subtitle={
                  categories.find((c) => c.id === currentCategory)
                    ?.description || ""
                }
                products={products[currentCategory as keyof typeof products]}
                onSelect={handleProductSelect}
                selectedProducts={selectedProducts}
              />
            </div>
          )}
        </div>

        <div className="border-t p-4 space-y-3 bg-white">
          <Collapsible open={menuOpen} onOpenChange={setMenuOpen}>
            <CollapsibleTrigger>Browse Collections</CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 pt-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className="w-full text-left px-2 py-2 text-[15px] text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {category.name}
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.elements.namedItem(
                "message"
              ) as HTMLInputElement;
              if (input.value.trim()) {
                handleSendMessage(input.value);
                input.value = "";
              }
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-[15px] focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <Button
              type="submit"
              className="rounded-full px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-[15px]"
            >
              Send
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
