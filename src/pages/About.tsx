import React from "react";
import {  Target, Eye } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">About <span className="text-primary">Ved Fitness</span></h1>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4">
            We are more than just a gym. We are a community dedicated to pushing human potential through 
            discipline, strength, and expert guidance.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="p-8 bg-secondary border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <Target className="text-primary" size={32} />
                <h2 className="text-2xl font-bold uppercase italic">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals to achieve their fitness goals by providing the best environment, 
                professional coaching, and state-of-the-art facilities. We believe everyone has an inner athlete 
                waiting to be unleashed.
              </p>
            </div>
            <div className="p-8 bg-secondary border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="text-primary" size={32} />
                <h2 className="text-2xl font-bold uppercase italic">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading fitness destination that inspires a lifelong commitment to health and wellness, 
                creating a stronger and more confident community.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_93e50f83-e4ae-43ab-815c-a9262bd34f5e.jpg" 
              alt="Professional gym interior" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary p-8 text-white hidden md:block">
              <p className="text-4xl font-black">10+</p>
              <p className="text-sm font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Members", value: "2,500+" },
              { label: "Trainers", value: "50+" },
              { label: "Facilities", value: "3" },
              { label: "Awards", value: "15" },
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <p className="text-4xl md:text-6xl font-black">{stat.value}</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Message */}
      <section className="py-24 bg-background">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6c4a3a64-aabd-4759-ba72-ca72e784bbc4.jpg" 
              alt="Gym Owner" 
              className="w-full aspect-square object-cover grayscale"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block p-2 bg-primary/10 text-primary font-bold uppercase text-xs tracking-widest mb-2">Message from Founder</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">Your Journey <span className="text-primary">Is Our Passion</span></h2>
            <p className="text-muted-foreground italic text-lg leading-relaxed">
              "Fitness is not about being better than someone else. It's about being better than you were yesterday. 
              At Ved Fitness, we've built a sanctuary where ego is left at the door and hard work is the only currency."
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-bold uppercase">Marcus Aurelius</h4>
              <p className="text-primary font-medium">Founder & Head Coach</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

