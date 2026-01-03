import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { StarIcon } from 'lucide-react'
import Link from 'next/link'
import VotingButtons from './voting-buttons'

const ProductCard = ({product}) => {
  const hasVoted = false
  return (
    <Link href={`/products/${product.slug}`}>
      <Card
        className={
          "group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-35 sm:min-h-40"
        }
      >
        <CardHeader className={"flex-1 p-4 sm:p-6"}>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start gap-1.5 sm:gap-2">
                <CardTitle
                  className={
                    "text-base sm:text-lg group-hover:text-primary transition-colors line-clamp-1"
                  }
                >
                  {product.name}
                </CardTitle>
                {product.voteCount > 100 && (
                  <Badge
                    className={"gap-1 bg-primary text-primary-foreground text-xs shrink-0"}
                  >
                    <StarIcon className="size-3 fill-current" />
                    <span className="hidden xs:inline">Featured</span>
                  </Badge>
                )}
              </div>
              <CardDescription className="text-sm sm:text-base line-clamp-2 mt-1">
                {product.description}
              </CardDescription>
            </div>
            <VotingButtons hasVoted={hasVoted} voteCount={product.voteCount}/>
          </div>
        </CardHeader>
        <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
            {product.tags?.slice(0, 3).map((tag) => (
              <Badge variant={"secondary"} key={tag} className="text-xs">
                {tag}
              </Badge>
            ))}
            {product.tags?.length > 3 && (
              <Badge variant={"outline"} className="text-xs">
                +{product.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProductCard
