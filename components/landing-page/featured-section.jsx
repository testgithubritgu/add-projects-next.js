import React from 'react'
import SectionHeader from './common/section-header';
import { StarIcon } from 'lucide-react';
import { Button } from '../ui/button';

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title={"Feature Today"}  icon={StarIcon} description={"Top picks from our community this week"} />
          <Button className={"bg-pink-800 hover:bg-pink-900 "}>View All</Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts
