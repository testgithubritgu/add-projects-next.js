'use cache'
import SectionHeader from "@/components/common/section-header";
import { ProductExplore } from "@/components/products/product-explore";
import { getAllProducts } from "@/lib/products/product-select";
import { CompassIcon } from "lucide-react";

export default async function ExplorePage() {
  const products = await getAllProducts()
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="wrapper px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <SectionHeader
            title={"Explore All Products"}
            icon={CompassIcon}
            description={
              "Browse and discover amazing projects from our community"
            }
          />
        </div>
        <ProductExplore products={products} />
      </div>
    </div>
  );
}
