import React from 'react'
import SectionHeader from './common/section-header';
import { RocketIcon } from 'lucide-react';

const RecentlyLaunchedProducts = () => {
  return (
    <section className='py-20'>
        <div className='wrapper'>
            <SectionHeader icon={RocketIcon} description={"Discover the latest products from our community"} title={"Recently Launched"}/>
        </div>
    </section>
  )
}

export default RecentlyLaunchedProducts;
