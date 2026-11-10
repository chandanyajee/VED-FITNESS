import React from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const JoinNow: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "Welcome to the Ved Fitness family. Our team will contact you soon.",
    });
  };

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-background py-20 px-4">
      <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Benefits */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-tight">
              Start Your <span className="text-primary">Journey</span> With Us Today!
            </h1>
            <p className="text-muted-foreground text-lg">
              Join thousands of others who have transformed their lives at Ved Fitness. 
              Fill out the form and get a free personal training session.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              "Instant Access to 24/7 Facilities",
              "Personalized Nutrition Guide",
              "Community Support Groups",
              "Complimentary Initial Body Scan",
              "Access to All HIIT & Yoga Classes"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary/20 flex items-center justify-center rounded-full text-primary">
                  <CheckCircle2 size={18} />
                </div>
                <span className="font-bold uppercase tracking-tight text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-secondary border border-border flex items-center gap-6">
            <ShieldCheck className="text-primary shrink-0" size={48} />
            <div>
              <h4 className="font-bold uppercase">100% Secure Signup</h4>
              <p className="text-xs text-muted-foreground">Your personal information is protected by industry-standard encryption.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <Card className="border-border bg-card w-full">
          <CardHeader className="p-8 text-center border-b border-border">
            <CardTitle className="text-3xl font-black uppercase italic tracking-tighter">Registration Form</CardTitle>
            <p className="text-muted-foreground text-sm mt-2">Fill in your details to get started</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="reg-name" className="uppercase font-bold text-xs tracking-widest">Full Name</Label>
                <Input id="reg-name" placeholder="Enter your full name" className="bg-background border-border h-12" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="reg-email" className="uppercase font-bold text-xs tracking-widest">Email Address</Label>
                  <Input id="reg-email" type="email" placeholder="john@example.com" className="bg-background border-border h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-phone" className="uppercase font-bold text-xs tracking-widest">Phone Number</Label>
                  <Input id="reg-phone" placeholder="+91 7858971869" className="bg-background border-border h-12" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-plan" className="uppercase font-bold text-xs tracking-widest">Select Membership Plan</Label>
                <Select required>
                  <SelectTrigger id="reg-plan" className="bg-background border-border h-12">
                    <SelectValue placeholder="Choose a plan" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="monthly">Monthly Plan - $29</SelectItem>
                    <SelectItem value="3-months">3 Months Plan - $79</SelectItem>
                    <SelectItem value="6-months">6 Months Plan - $149</SelectItem>
                    <SelectItem value="annual">1 Year Plan - $249</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-4">
                <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest rounded-none shadow-lg shadow-primary/20">
                  Submit Registration
                </Button>
              </div>
              <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest">
                By clicking submit, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JoinNow;

