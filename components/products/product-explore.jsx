'use client'
import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ProductCard from "./product-card";
import { useMemo, useState } from "react";

export function ProductExplore({ products }) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProductsResult = useMemo(() => {
    if (searchQuery.length > 0) {
      return products.filter(prd => prd.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return products
  }, [searchQuery, products])

  return (
    <div className="px-4 sm:px-0">
      <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
          <Input
            type={"text"}
            placeholder="Search products..."
            className={"pl-10 h-10 sm:h-11"}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none" size="sm">
            <TrendingUpIcon className="size-4" />
            <span className="ml-1">Trending</span>
          </Button>
          <Button className="flex-1 sm:flex-none" size="sm">
            <ClockIcon className="size-4" />
            <span className="ml-1">Recent</span>
          </Button>
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <p className="text-sm sm:text-base text-muted-foreground">
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
