import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

interface FloatingChatButtonProps {
  onClick: () => void;
}

export function FloatingChatButton({ onClick }: FloatingChatButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-shadow"
      size="icon"
      variant="default"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Open chat</span>
    </Button>
  );
}
