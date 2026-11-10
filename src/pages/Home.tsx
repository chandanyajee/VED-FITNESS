import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Star,  ArrowRight, Activity, Users, Shield, Zap } from "lucide-react";
import { BMICalculator } from "@/components/features/BMICalculator";
import { cn } from "@/lib/utils";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_d155e83d-bcd7-4acc-9f0f-914d401375c0.jpg"
            alt="Intense workout atmosphere in a modern gym"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center space-y-8 max-w-4xl px-4">
          <div className="inline-block px-4 py-1.5 mb-2 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-semibold tracking-widest uppercase animate-fade-in">
            Peak Performance Starts Here
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] animate-fade-in">
            CRUSH YOUR <span className="gradient-text">LIMITS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
            Join Ved Fitness today and transform your body with our professional trainers and world-class equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in delay-200">
            <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 rounded-none">
              <Link to="/join-now">Join Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-2 hover:bg-white hover:text-black rounded-none">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Why Choose <span className="text-primary">Us</span></h2>
            <div className="h-1.5 w-24 bg-primary mx-auto" />
            <p className="text-muted-foreground">We provide everything you need to reach your peak potential.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Activity, title: "Expert Coaching", desc: "Professional trainers to guide your journey." },
              { icon: Shield, title: "Modern Equipment", desc: "Top-tier machines for every muscle group." },
              { icon: Zap, title: "High Energy", desc: "Motivating environment to keep you pushing." },
              { icon: Users, title: "Community", desc: "Join a family of fitness enthusiasts." },
            ].map((item, idx) => (
              <div key={idx} className="group p-8 border border-border bg-card hover:border-primary transition-all duration-300 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-secondary group-hover:bg-primary transition-colors">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Membership <span className="text-primary">Plans</span></h2>
              <p className="text-muted-foreground">Choose the plan that fits your lifestyle.</p>
            </div>
            <Button asChild variant="link" className="text-primary p-0 h-auto text-lg group">
              <Link to="/memberships" className="flex items-center gap-2">
                View All Plans <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "29", features: ["Access to Gym", "Locker Room", "Standard Equipment"] },
              { name: "Premium", price: "59", features: ["24/7 Access", "Group Classes", "Personal Trainer (1 session)", "Sauna Access"], popular: true },
              { name: "Pro", price: "99", features: ["All Premium Features", "Nutrition Plan", "Supplements Discount", "Monthly Body Scan"] },
            ].map((plan, idx) => (
              <Card key={idx} className={cn("relative overflow-hidden border-border bg-card flex flex-col h-full", plan.popular && "border-primary")}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2 uppercase">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-black text-primary">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={cn("w-full h-12 font-bold uppercase", plan.popular ? "bg-primary" : "bg-secondary")}>
                    <Link to="/join-now">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Preview */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Expert <span className="text-primary">Trainers</span></h2>
            <div className="h-1.5 w-24 bg-primary mx-auto" />
            <p className="text-muted-foreground">Our professionals are here to push you to the next level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Wick", role: "Strength Coach", img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_61692d81-0659-4044-b4dd-7a45c129ecc8.jpg" },
              { name: "Sarah Power", role: "HIIT Specialist", img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f749304f-feaf-4b11-b58c-39f6bd824594.jpg" },
              { name: "Alex Muscle", role: "Bodybuilding", img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0a0d7808-fd3a-4b39-bfc9-8f4823241558.jpg" },
            ].map((trainer, idx) => (
              <div key={idx} className="group relative overflow-hidden aspect-[4/5] bg-secondary">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="h-1 w-12 bg-primary mb-4" />
                  <h3 className="text-2xl font-bold uppercase">{trainer.name}</h3>
                  <p className="text-primary font-medium">{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/trainers">Meet All Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* BMI Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight">Check Your <span className="text-primary">Body Mass Index</span></h2>
            <p className="text-muted-foreground text-lg">
              BMI is a measure of body fat based on height and weight that applies to adult men and women. 
              Use our tool to quickly find out where you stand.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-full">
                  <CheckCircle2 className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Track Your Progress</h4>
                  <p className="text-sm text-muted-foreground">Keep record of your transformation journey.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-full">
                  <CheckCircle2 className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Free Health Consultation</h4>
                  <p className="text-sm text-muted-foreground">Get expert advice based on your results.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">What Our <span className="text-primary">Members Say</span></h2>
            <div className="h-1.5 w-24 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Michael Ross", role: "Member since 2024", content: "Best gym in the city! The equipment is top-notch and the community is so welcoming." },
              { name: "Jessica Alba", role: "Athlete", content: "The trainers here really know their stuff. I've seen more results in 3 months than I did in 3 years elsewhere." },
              { name: "David Goggins", role: "Ultra Runner", content: "High energy, great music, and the best atmosphere to push your limits every single day." },
            ].map((t, i) => (
              <div key={i} className="bg-secondary p-8 border-l-4 border-primary space-y-4">
                <div className="flex text-primary gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={16} />)}
                </div>
                <p className="italic text-muted-foreground">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div>
                    <h4 className="font-bold uppercase">{t.name}</h4>
                    <p className="text-xs text-primary">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="container text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
            Ready to start your <span className="text-black">Transformation?</span>
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Get 20% off on your first month when you sign up online today!
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 h-16 px-10 text-xl font-bold rounded-none">
            <Link to="/join-now">Get Started Now</Link>
          </Button>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </section>
    </div>
  );
};

export default Home;
