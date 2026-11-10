import  { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, Gift } from "lucide-react";

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("offerSeen");
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("offerSeen", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-card border-border max-w-md p-0 overflow-hidden">
        <div className="relative">
          <div className="absolute top-2 right-2 z-20">
            <Button variant="ghost" size="icon" onClick={handleClose} className="text-white hover:bg-white/20">
              <X size={20} />
            </Button>
          </div>
          <div className="bg-primary p-12 flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white mb-2">
              <Gift size={40} />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">Special Offer!</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Join Today & Get</p>
            <div className="text-6xl font-black text-white">20%<span className="text-2xl">OFF</span></div>
            <p className="text-white/70 text-sm">Valid for first 50 new members this month.</p>
          </div>
          <div className="p-8 space-y-4 bg-card">
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 uppercase tracking-widest rounded-none" onClick={handleClose}>
              <Link to="/join-now">Claim Discount Now</Link>
            </Button>
            <Button variant="outline" className="w-full border-border text-muted-foreground font-bold h-12 uppercase tracking-widest rounded-none" onClick={handleClose}>
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
