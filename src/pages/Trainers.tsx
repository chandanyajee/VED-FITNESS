import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const trainers = [
  {
    name: "John Wick",
    role: "Head Strength Coach",
    exp: "12+ Years",
    special: ["Powerlifting", "Body Recomposition", "Olympic Lifting"],
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_61692d81-0659-4044-b4dd-7a45c129ecc8.jpg",
    social: { insta: "#", twitter: "#", linked: "#" }
  },
  {
    name: "Sarah Power",
    role: "HIIT & Cardio Specialist",
    exp: "8+ Years",
    special: ["Fat Loss", "Endurance Training", "Kettlebell"],
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f749304f-feaf-4b11-b58c-39f6bd824594.jpg",
    social: { insta: "#", fb: "#", linked: "#" }
  },
  {
    name: "Alex Muscle",
    role: "Bodybuilding Coach",
    exp: "10+ Years",
    special: ["Hypertrophy", "Competition Prep", "Nutrition"],
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0a0d7808-fd3a-4b39-bfc9-8f4823241558.jpg",
    social: { insta: "#", twitter: "#", fb: "#" }
  },
  {
    name: "Elena Zen",
    role: "Yoga & Flexibility",
    exp: "6+ Years",
    special: ["Vinyasa Yoga", "Mobility", "Mindfulness"],
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f749304f-feaf-4b11-b58c-39f6bd824594.jpg",
    social: { insta: "#", fb: "#", linked: "#" }
  },
  {
    name: "Mike Tyson",
    role: "Boxing Instructor",
    exp: "15+ Years",
    special: ["Boxing Technique", "Defense", "Core Strength"],
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_61692d81-0659-4044-b4dd-7a45c129ecc8.jpg",
    social: { insta: "#", twitter: "#", linked: "#" }
  },
  {
    name: "Chris Cross",
    role: "CrossFit Coach",
    exp: "7+ Years",
    special: ["WOD Expert", "Gymnastics", "Metcon"],
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0a0d7808-fd3a-4b39-bfc9-8f4823241558.jpg",
    social: { insta: "#", fb: "#", linked: "#" }
  }
];

const Trainers: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Our Expert <span className="text-primary">Trainers</span></h1>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4">
            Learn from the best. Our trainers are certified professionals dedicated to helping you reach your goals.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trainers.map((t, idx) => (
            <div key={idx} className="group relative bg-secondary overflow-hidden border border-border hover:border-primary transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">{t.name}</h3>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase">{t.role}</p>
                  </div>
                  <div className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
                    {t.exp} EXP
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Specializations</p>
                  <div className="flex flex-wrap gap-2">
                    {t.special.map((s, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-background border border-border text-foreground/80 uppercase">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  {t.social.insta && <a href={t.social.insta} className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>}
                  {t.social.twitter && <a href={t.social.twitter} className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>}
                  {t.social.fb && <a href={t.social.fb} className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>}
                  {t.social.linked && <a href={t.social.linked} className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Want a Personal <span className="text-black">Training Session?</span></h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Book a free 30-minute consultation with one of our head trainers to discuss your fitness goals.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-black/80 h-16 px-10 text-xl font-bold rounded-none">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
