import { ClockIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ProductCard from "./product-card";

export function ProductExplore (){
    return (
      <div>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 ">

        <div className="flex-1 relative">
          <Input />
        </div>
        
        <div className="flex gap-2 ">
          <Button variant="outline">
            <TrendingUpIcon />
            Trending</Button>
          <Button>
            <ClockIcon />
            Recent</Button>
        </div>

        <div className="mb-6">
        <p className="text-muted-foreground">Showing {products.length} Products</p>
        </div>

        <div className="grid-wrapper">
            {
                products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
        </div>
      </div>
    );
}