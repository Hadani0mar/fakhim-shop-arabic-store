import { useState } from "react";
import { Header } from "@/components/store/Header";
import { Hero } from "@/components/store/Hero";
import { ProductGrid } from "@/components/store/ProductGrid";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        cartItemsCount={0} 
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <ProductGrid searchQuery={searchQuery} />
    </div>
  );
};

export default Index;
