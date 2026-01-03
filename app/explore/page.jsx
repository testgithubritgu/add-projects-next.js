import SectionHeader from "@/components/common/section-header";
import { ProductExplore } from "@/components/products/product-explore";
import { CompassIcon } from "lucide-react";

export default function ExplorePage(){
        return (
            <div className="py-20">
                    <div className="wrapper">
                        <SectionHeader title={"Explore All Products"} icon={CompassIcon} description={"Brows and discover amazing project from our community"}/>
                    <ProductExplore />
                    </div>
            </div>
        )
} 