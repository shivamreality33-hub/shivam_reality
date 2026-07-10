import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const projects = [
  {
    id: 1,
    title: "Aurora Tower Residences",
    location: "City Center, Downtown",
    type: "Premium Apartments",
    image: "/images/hero.png",
    price: "Starting from $1.2M",
    status: "Under Construction"
  },
  {
    id: 2,
    title: "The Sapphire Villas",
    location: "Green Valley Estates",
    type: "Luxury Villas",
    image: "/images/project1.png",
    price: "Starting from $3.5M",
    status: "Ready to Move"
  },
  {
    id: 3,
    title: "Skyline Penthouses",
    location: "Financial District",
    type: "Ultra-Luxury",
    image: "/images/project2.png",
    price: "On Request",
    status: "Newly Launched"
  }
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured Projects
            </h1>
            <p className="text-text-muted text-lg">
              Explore our curated selection of premium residential and commercial properties from trusted builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.id === 1}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                    {project.type}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-text-main mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-text-muted text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1 text-primary" />
                    {project.location}
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <div className="font-bold text-primary">
                      {project.price}
                    </div>
                    <button className="flex items-center text-sm font-bold text-secondary hover:text-primary transition-colors">
                      Details <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
