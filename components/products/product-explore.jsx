'use client'
import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ProductCard from "./product-card";
import {  useMemo, useState } from "react";

export  function ProductExplore({ products }) {
    const [searchQuery,setSearchQuery] = useState("")
  

    const filteredProductsResult = useMemo(()=>{
            if(searchQuery.length > 0){
                return products.filter(prd  => prd.name.toLowerCase().includes(searchQuery.toLowerCase()))
            
            }
            return products
        
    },[searchQuery,products])
   
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8 ">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />

          <Input
            type={"text"}
            placeholder="search products..."
            className={"pl-10"}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>

        <div className="flex gap-2 ">
          <Button variant="outline">
            <TrendingUpIcon />
            Trending
          </Button>
          <Button>
            <ClockIcon />
            Recent
          </Button>
        </div>

        <div className="mb-6"></div>
      </div>
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredProductsResult.length} Products
        </p>
      </div>

      <div className="grid-wrapper">
        {filteredProductsResult.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}