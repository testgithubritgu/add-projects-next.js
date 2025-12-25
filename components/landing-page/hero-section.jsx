import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, EyeIcon, RocketIcon, SparkleIcon, UserIcon } from 'lucide-react';
import StatsCard from './stats-card';

const LiveBadge =()=>{
  return (
    <Badge
      variant={"outline"}
      className={
        "px-4 py-2 mb-8 text-sm backdrop-blur-sm gap-2.5 border-2 border-gray-800"
      }
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className='text-muted-foreground'>join thousand of creators sharing there works</span>
    </Badge>
  );
}

const stateData = [
  {
    icon: RocketIcon,
    value: "3.5k+",
    label: "Projects Shared",
    hasBorder: false,
  },
  {
    icon: UserIcon,
    value: "10k+",
    label: "Active Creators",
    hasBorder: true,
  },
  {
    icon: EyeIcon,
    value: "50k+",
    label: "Monthly Visitors",
    hasBorder: false,
  },
];

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center flex-col py-9 lg:py-16 overflow-hidden gap-4">
      <LiveBadge />
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
          Show what you’ve created, explore what’s new
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-center">
          A community-driven space where creators present their apps, AI tools,
          SaaS products, and creative ideas.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Button
          asChild
          size="lg"
          className={"bg-pink-800 text-base px-8 shadow-lg text-white"}
        >
          <Link href={"/submit"}>
            <SparkleIcon className="size-5" />
            Share Your Project
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className={" text-base px-8 shadow-lg bg-sky-500"}
        >
          <Link href={"/explore"}>
            Explore Projects <ArrowRight className="size-5" />
          </Link>
        </Button>
      </div>
      <div className='flex justify-between gap-14'>
        {" "}
        {stateData.map((state) => (
          <StatsCard key={state.label} {...state} />
        ))}
      </div>
    </div>
  );
}

export default HeroSection
