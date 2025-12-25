import React from "react";
import SectionHeader from "./common/section-header";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "./products/product-card";

const featuredProducts = [
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

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title={"Feature Today"}
            icon={StarIcon}
            description={"Top picks from our community this week"}
          />
          <Link href={"/exlpore"} passHref>
            <Button variant="outline" className={"hidden sm:flex"}>
              View All <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
        </div>
        <div  className="grid-wrapper">
    {featuredProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
