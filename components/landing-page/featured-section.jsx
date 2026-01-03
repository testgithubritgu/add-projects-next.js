"use cache";
import SectionHeader from "../common/section-header";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../products/product-card";
import { getFeaturedData } from "@/lib/products/product-select";

const FeaturedProducts = async () => {
  const featuredProducts = await getFeaturedData();
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="wrapper px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <SectionHeader
            title={"Featured Today"}
            icon={StarIcon}
            description={"Top picks from our community this week"}
          />
          <Link href={"/explore"} passHref>
            <Button variant="outline" className={"w-full sm:w-auto"}>
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
