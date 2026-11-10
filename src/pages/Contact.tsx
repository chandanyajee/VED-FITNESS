import React from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Contact <span className="text-primary">Us</span></h1>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4">
            Have questions? We're here to help. Reach out to us via any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">Get In <span className="text-primary">Touch</span></h2>
                <p className="text-muted-foreground">
                  Our team is available to assist you with membership inquiries, personal training bookings, 
                  or any other questions you may have.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-primary">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone size={24} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-sm text-foreground">Phone</h4>
                  </div>
                  <p className="text-muted-foreground">+91 7858971869</p>
                  <p className="text-muted-foreground">+91 7858971869</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-primary">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail size={24} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-sm text-foreground">Email</h4>
                  </div>
                  <p className="text-muted-foreground">vedtechservicess@gmail.com</p>
                  <p className="text-muted-foreground">vedtechservicess@gmail.com</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-primary">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-sm text-foreground">Address</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Main Street, Your City,<br />ZC 00000, United States
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-primary">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock size={24} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-sm text-foreground">Hours</h4>
                  </div>
                  <p className="text-muted-foreground">Mon - Fri: 5am - 11pm</p>
                  <p className="text-muted-foreground">Sat - Sun: 7am - 9pm</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold h-14 flex-1 rounded-none gap-2">
                  <a href="https://wa.me/917858971869" target="_blank" rel="noopener noreferrer">
                    <MessageCircle fill="currentColor" /> WhatsApp Us
                  </a>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold h-14 flex-1 rounded-none gap-2">
                  <a href="tel:+917858971869">
                    <Phone fill="currentColor" /> Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="uppercase font-bold text-xs tracking-widest">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-background border-border h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="uppercase font-bold text-xs tracking-widest">Phone Number</Label>
                  <Input id="phone" placeholder="+91 7858971869" className="bg-background border-border h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="uppercase font-bold text-xs tracking-widest">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="uppercase font-bold text-xs tracking-widest">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="bg-background border-border min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest rounded-none">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full bg-secondary grayscale">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1614300000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="Gym Location"
        />
      </section>
    </div>
  );
};

export default Contact;

