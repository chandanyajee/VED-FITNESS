import React from "react";
import { Apple, Utensils, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DietPlan: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Nutrition & <span className="text-primary">Diet Plans</span></h1>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4">
            Fuel your body with the right nutrients. Our expert nutritionists create plans 
            tailored to your fitness goals.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Weight Loss", 
              icon: Apple, 
              desc: "Calorie-deficit plans focusing on high protein and low carbs to shed fat while maintaining muscle.",
              meals: ["Keto Friendly", "Low Carb", "Intermittent Fasting"]
            },
            { 
              title: "Muscle Gain", 
              icon: Zap, 
              desc: "Calorie-surplus plans rich in complex carbs and lean proteins to fuel hypertrophy.",
              meals: ["Bulking Guide", "High Protein", "Pre/Post Workout"]
            },
            { 
              title: "Performance", 
              icon: Utensils, 
              desc: "Balanced nutrition for athletes looking to improve endurance, speed, and recovery.",
              meals: ["Clean Eating", "Macro Balanced", "Recovery focused"]
            }
          ].map((plan, i) => (
            <Card key={i} className="bg-secondary border-border hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <plan.icon size={32} />
                </div>
                <CardTitle className="text-2xl font-bold uppercase italic">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground text-center">{plan.desc}</p>
                <ul className="space-y-3">
                  {plan.meals.map((meal, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="text-primary" size={16} />
                      <span>{meal}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-none font-bold uppercase">Get This Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">Personalized <span className="text-primary">Consultation</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not sure which plan is right for you? Book a 1-on-1 session with our certified nutritionist 
            to get a custom plan designed for your body type and lifestyle.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/80 h-16 px-10 text-xl font-bold rounded-none">
            Book Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DietPlan;

