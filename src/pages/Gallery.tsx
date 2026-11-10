import React  from "react";
import { Play, Maximize2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const images = {
  facility: [
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_93e50f83-e4ae-43ab-815c-a9262bd34f5e.jpg", title: "Main Workout Floor" },
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_2ab35417-bf25-40e2-8697-dd51f287a4f8.jpg", title: "Cardio Zone" },
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cafcec19-aa1a-4f94-9cca-0056b80f7344.jpg", title: "Locker Rooms" },
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_a47b71da-4609-4e1c-8cf4-ce1a3be25649.jpg", title: "Yoga Studio" },
  ],
  sessions: [
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6bc8c933-5cce-49e6-9514-2a868f905526.jpg", title: "Group HIIT Session" },
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e0a6977e-efa6-480f-8532-03aceba60857.jpg", title: "Personal Training" },
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0e2a1b12-993c-43a3-9e53-073226bc7d61.jpg", title: "Boxing Class" },
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f9b0049c-745a-490c-a3fc-cc05362a1531.jpg", title: "CrossFit WOD" },
  ],
  transformations: [
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0e663483-502e-41bf-95aa-fbdb1c03fbf1.jpg", title: "12 Weeks Progress" },
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3c8338fd-122d-45e5-86a1-d8637d1b0ecb.jpg", title: "Muscle Gain Journey" },
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0e663483-502e-41bf-95aa-fbdb1c03fbf1.jpg", title: "Fat Loss Success" },
    { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3c8338fd-122d-45e5-86a1-d8637d1b0ecb.jpg", title: "Body Recomposition" },
  ]
};

const Gallery: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-secondary">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Gym <span className="text-primary">Gallery</span></h1>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4">
            Take a visual tour of our facilities, sessions, and member transformations.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-secondary p-1 border border-border">
                <TabsTrigger value="all" className="uppercase font-bold tracking-widest text-xs px-6">All</TabsTrigger>
                <TabsTrigger value="facility" className="uppercase font-bold tracking-widest text-xs px-6">Facility</TabsTrigger>
                <TabsTrigger value="sessions" className="uppercase font-bold tracking-widest text-xs px-6">Sessions</TabsTrigger>
                <TabsTrigger value="transformations" className="uppercase font-bold tracking-widest text-xs px-6">Transformations</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...images.facility, ...images.sessions, ...images.transformations].map((img, i) => (
                  <GalleryItem key={i} src={img.src} title={img.title} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="facility" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.facility.map((img, i) => (
                  <GalleryItem key={i} src={img.src} title={img.title} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sessions" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.sessions.map((img, i) => (
                  <GalleryItem key={i} src={img.src} title={img.title} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transformations" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.transformations.map((img, i) => (
                  <GalleryItem key={i} src={img.src} title={img.title} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Experience <span className="text-primary">The Vibe</span></h2>
            <div className="h-1.5 w-24 bg-primary mx-auto" />
          </div>
          <div className="relative aspect-video max-w-5xl mx-auto group overflow-hidden bg-black">
            <img 
              src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_d5b35855-3803-4030-a525-c6680fb924fc.jpg" 
              alt="Gym video thumbnail" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                <Play fill="currentColor" size={32} />
              </button>
            </div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">Official Brand Film 2026</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const GalleryItem = ({ src, title }: { src: string; title: string }) => (
  <div className="group relative aspect-square overflow-hidden bg-secondary border border-border">
    <img 
      src={src} 
      alt={title} 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
    />
    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <div className="p-4 text-center">
        <Maximize2 className="text-white mx-auto mb-2" />
        <p className="text-white font-bold uppercase text-xs tracking-widest">{title}</p>
      </div>
    </div>
  </div>
);

export default Gallery;

