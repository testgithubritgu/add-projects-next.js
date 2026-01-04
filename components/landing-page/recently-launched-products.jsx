"use cache";
import SectionHeader from "../common/section-header";
import { RocketIcon } from "lucide-react";
import ProductCard from "../products/product-card";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";
import ProductSkeleton from "../products/product-skeleton";

const RecentlyLaunchedProducts = async () => {
  const recentlyLaunched = await getRecentlyLaunchedProducts();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="wrapper px-4 sm:px-6 space-y-8 sm:space-y-12">
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
        ) : (
         <p className="text-muted-foreground">No recently launched products...!</p>
        )}
      </div>
    </section>
  );
};

export default RecentlyLaunchedProducts;
