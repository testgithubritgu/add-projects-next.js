import React from 'react'
import SectionHeader from './common/section-header';
import { CalendarSearchIcon, RocketIcon } from 'lucide-react';
import ProductCard from './products/product-card';
import EmptyState from './common/empty-state';

const RecentlyLaunchedProducts = () => {
    
const recentlyLaunched = [
  {
    id: 1,
    name: "ParityKit",
    description: "A toolkit for creating parity products",
    tags: ["SaaS", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Modern Full Stack Next.js Course",
    description: "Learn to build production-ready full stack apps with Next.js",
    tags: ["Next.js", "Full-Stack", "Course"],
    votes: 124,
    isFeatured: false,
  },
];
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          icon={RocketIcon}
          description={"Discover the latest products from our community"}
          title={"Recently Launched"}
        />
        {recentlyLaunched.length > 0 ? (
            <div className="grid-wrapper">
          {recentlyLaunched.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        ):(
            <EmptyState message="No products launched in the last week, check back soon for the new launches" icon={CalendarSearchIcon}/>
        )}
      </div>
    </section>
  );
}

export default RecentlyLaunchedProducts;
