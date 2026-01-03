import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import VotingButtons from './voting-buttons'

const ProductCard = ({product}) => {
  const  hasVoted = false
  return (
    <Link href={`/products/${product.slug}`}>
      <Card
        className={
          "group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-45"
        }
      >
        <CardHeader className={"flex-1"}>
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2">
                <CardTitle
                  className={
                    "text-lg group-hover:text-primary transition-colors"
                  }
                >
                  {product.name}
                </CardTitle>
                {product.voteCount > 100 && (
                  <Badge
                    className={"gap-1 bg-primary text-primary-foreground "}
                  >
                    <StarIcon className="size-3 fill-current" /> Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>
            <VotingButtons hasVoted={hasVoted} voteCount={product.voteCount}/>
          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex gap-2 items-center ">
            {product.tags?.map((tag) => (
              <Badge variant={"secondary"} key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProductCard
