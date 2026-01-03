'use cache'
import SectionHeader from "@/components/common/section-header";
import { ProductExplore } from "@/components/products/product-explore";
import { getAllProducts } from "@/lib/products/product-select";
import { CompassIcon } from "lucide-react";

export default  async function ExplorePage(){
    const products = await getAllProducts()
        return (
          <div className="py-20">
            <div className="wrapper">
              <div className="mb-12">
                <SectionHeader
                  title={"Explore All Products"}
                  icon={CompassIcon}
                  description={
                    "Brows and discover amazing project from our community"
                  }
                />
              </div>
              <ProductExplore products={products}/>
            </div>
          </div>
        );
} 