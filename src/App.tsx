import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FloatingChatButton } from "./components/FloatingChatButton";
import { ChatDialog } from "./components/ChatDialog";
import "./App.css";

function StellaMcCartneyLayout() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbtapyfau/image/upload/v1761523038/Screenshot_2025-10-27_at_5.26.56_AM_ciw51y.png')",
        }}
      />

      {/* Chat components */}
      <div className="fixed right-4 bottom-4 z-50">
        <FloatingChatButton onClick={() => setIsChatOpen(true)} />
        <ChatDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StellaMcCartneyLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
