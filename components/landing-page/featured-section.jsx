import React from 'react'
import SectionHeader from './common/section-header';
import { ArrowRightIcon, StarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title={"Feature Today"}
            icon={StarIcon}
            description={"Top picks from our community this week"}
          />
            <Link href={"/exlpore"} passHref>
          <Button variant="outline" className={"hidden sm:flex"}>
              View All <ArrowRightIcon className="size-4" />{" "}
          </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts
