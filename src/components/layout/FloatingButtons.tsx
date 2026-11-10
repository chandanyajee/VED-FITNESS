import { MessageCircle, Phone } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      <a
        href="https://wa.me/917858971869"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle fill="currentColor" size={28} />
      </a>
      <a
        href="tel:+917858971869"
        className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone fill="currentColor" size={28} />
      </a>
    </div>
  );
}

