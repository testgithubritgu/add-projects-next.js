"use cache";
import React from "react";
import SectionHeader from "../common/section-header";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../products/product-card";
import { getFeaturedData } from "@/lib/products/product-select";

const FeaturedProducts = async () => {
  const featuredProducts = await getFeaturedData();
  console.log(featuredProducts,'<<<<<<<<<<<<featured products');
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
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
