"use cache";
import React from "react";
import SectionHeader from "../common/section-header";
import { CalendarSearchIcon, RocketIcon } from "lucide-react";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

const RecentlyLaunchedProducts = async () => {
  const recentlyLaunched = await getRecentlyLaunchedProducts();
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
        ) : (
          <EmptyState
            message="No products launched in the last week, check back soon for the new launches"
            icon={CalendarSearchIcon}
          />
        )}
      </div>
    </section>
  );
};

export default RecentlyLaunchedProducts;
