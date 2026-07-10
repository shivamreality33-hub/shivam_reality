import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const insights = [
  {
    id: 1,
    title: "Top 5 Reasons to Invest in Commercial Real Estate in 2025",
    excerpt: "Discover why commercial spaces are outperforming traditional residential investments and how you can capitalize on this emerging trend.",
    image: "/images/insight1.png",
    author: "Shivam Team",
    date: "July 12, 2024",
    category: "Investment"
  },
  {
    id: 2,
    title: "Understanding RERA: What Every Homebuyer Needs to Know",
    excerpt: "A comprehensive guide to the Real Estate Regulatory Authority and how it protects your rights and investments as a property buyer.",
    image: "/images/about.png",
    author: "Legal Expert",
    date: "June 28, 2024",
    category: "Guidelines"
  },
  {
    id: 3,
    title: "The Rise of Luxury Smart Homes",
    excerpt: "Explore the latest technological advancements that are redefining luxury living and increasing property valuations across the city.",
    image: "/images/hero.png",
    author: "Design Team",
    date: "June 15, 2024",
    category: "Trends"
  }
];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Market Insights
            </h1>
            <p className="text-text-muted text-lg">
              Stay updated with the latest real estate trends, investment guides, and expert advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center space-x-4 text-xs text-text-muted mb-3">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {article.date}</span>
                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {article.author}</span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <button className="flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
