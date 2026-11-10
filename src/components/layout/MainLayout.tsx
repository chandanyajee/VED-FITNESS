
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { OfferPopup } from "../features/OfferPopup";
import { Toaster } from "@/components/ui/toaster";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <OfferPopup />
      <Toaster />
    </div>
  );
}

