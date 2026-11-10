// Placeholder: add the original project implementation here.
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-primary">
            VED <span className="text-foreground">FITNESS</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Elevate your lifestyle with Ved Fitness. We provide state-of-the-art facilities, 
            expert trainers, and a motivating environment to help you reach your goals.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-background rounded-full hover:bg-primary transition-colors text-foreground">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-background rounded-full hover:bg-primary transition-colors text-foreground">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-background rounded-full hover:bg-primary transition-colors text-foreground">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-background rounded-full hover:bg-primary transition-colors text-foreground">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/memberships" className="text-muted-foreground hover:text-primary transition-colors">Membership Plans</Link></li>
            <li><Link to="/trainers" className="text-muted-foreground hover:text-primary transition-colors">Our Trainers</Link></li>
            <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gym Gallery</Link></li>
            <li><Link to="/diet-plan" className="text-muted-foreground hover:text-primary transition-colors">Diet Plans</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Fitness Blog</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Support</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            <li><Link to="/join-now" className="text-muted-foreground hover:text-primary transition-colors">Join Now</Link></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-muted-foreground">
              <MapPin className="text-primary shrink-0" size={20} />
              <span>Main Street, Your City, ZC 00000</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <Phone className="text-primary shrink-0" size={20} />
              <span>+91 7858971869</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <Mail className="text-primary shrink-0" size={20} />
              <span>vedtechservicess@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        <p>&copy; 2026 Ved Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
}
