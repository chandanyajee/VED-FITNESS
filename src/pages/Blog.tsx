import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogs = [
  {
    title: "5 Best Exercises for Explosive Power",
    excerpt: "Learn the top movements used by athletes to build incredible strength and speed...",
    date: "Feb 10, 2026",
    author: "Head Coach John",
    category: "Training",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_d155e83d-bcd7-4acc-9f0f-914d401375c0.jpg"
  },
  {
    title: "The Truth About Intermittent Fasting",
    excerpt: "Is fasting actually good for fat loss? We dive into the science behind this popular trend...",
    date: "Feb 08, 2026",
    author: "Sarah Power",
    category: "Nutrition",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f9b0049c-745a-490c-a3fc-cc05362a1531.jpg"
  },
  {
    title: "How to Stay Motivated During Winter",
    excerpt: "Don't let the cold weather stop your progress. Here are our top tips for consistency...",
    date: "Feb 05, 2026",
    author: "Alex Muscle",
    category: "Mindset",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_93e50f83-e4ae-43ab-815c-a9262bd34f5e.jpg"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Fitness <span className="text-primary">Blog</span></h1>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4">
            Stay informed with the latest tips, research, and stories from the world of fitness.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <Card key={i} className="bg-secondary border-border overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-primary font-bold uppercase tracking-widest">
                    <span>{blog.category}</span>
                    <span className="text-muted-foreground">|</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold uppercase italic group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs">
                      <User size={12} className="text-primary" />
                      <span className="font-medium">{blog.author}</span>
                    </div>
                    <Button variant="link" className="text-primary p-0 h-auto gap-1">
                      Read More <ArrowRight size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
