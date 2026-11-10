import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Monthly",
    price: "29",
    period: "Month",
    description: "Perfect for those starting their fitness journey.",
    features: ["Standard Gym Access", "Basic Locker Room", "Fitness Assessment", "Mobile App Access"],
  },
  {
    name: "3 Months",
    price: "79",
    period: "Quarter",
    description: "Consistent training for visible results.",
    features: ["All Monthly Features", "Group Classes (2/week)", "Custom Workout Plan", "Sauna Access"],
    popular: true,
  },
  {
    name: "6 Months",
    price: "149",
    period: "Semi-Annual",
    description: "Commitment to long-term health transformation.",
    features: ["All 3 Month Features", "Personal Trainer (1 session/month)", "Diet Consultation", "Guest Passes (1/month)"],
  },
  {
    name: "1 Year",
    price: "249",
    period: "Annual",
    description: "Ultimate fitness lifestyle for the dedicated.",
    features: ["Unlimited Class Access", "Unlimited Personal Trainer", "Full Nutrition Suite", "Merchandise Discount (20%)", "Free Shakes"],
  },
];

const Memberships: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-20 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Membership <span className="text-primary">Plans</span></h1>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4">
            Invest in yourself today. Choose the plan that best fits your goals and schedule.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={cn(
                  "relative flex flex-col border-border bg-card transition-transform hover:-translate-y-2",
                  plan.popular && "border-primary ring-1 ring-primary"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    Best Value
                  </div>
                )}
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-black uppercase italic">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-1 space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-primary">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="text-primary shrink-0" size={18} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button asChild className={cn("w-full h-12 font-bold uppercase", plan.popular ? "bg-primary" : "bg-secondary")}>
                    <Link to="/join-now">Join Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="container mb-24">
        <div className="bg-primary p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">Student & Army <span className="text-black">Discounts</span></h2>
            <p className="text-white/80 text-lg max-w-xl">
              We offer special pricing for students and active military personnel. Present your ID at our reception 
              to get 15% flat discount on any annual plan.
            </p>
          </div>
          <Button size="lg" className="relative z-10 bg-black text-white hover:bg-black/80 h-16 px-10 text-xl font-bold rounded-none">
            Get Offer
          </Button>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default Memberships;

