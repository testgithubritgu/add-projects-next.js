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
        "px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 text-xs sm:text-sm backdrop-blur-sm gap-2 sm:gap-2.5 border-2 border-gray-800"
      }
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className='text-muted-foreground text-center'>join thousand of creators sharing there works</span>
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
    <div className="relative flex justify-center items-center flex-col py-8 sm:py-12 lg:py-16 px-4 sm:px-6 overflow-hidden gap-3 sm:gap-4">
      <LiveBadge />
      <div className="text-center px-2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 max-w-5xl leading-tight">
          Show what you've created, explore what's new
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-center">
          A community-driven space where creators present their apps, AI tools,
          SaaS products, and creative ideas.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16 w-full sm:w-auto px-4 sm:px-0">
        <Button
          asChild
          size="lg"
          className={"bg-pink-800 text-sm sm:text-base px-6 sm:px-8 shadow-lg text-white w-full sm:w-auto"}
        >
          <Link href={"/submit"}>
            <SparkleIcon className="size-4 sm:size-5" />
            Share Your Project
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className={"text-sm sm:text-base px-6 sm:px-8 shadow-lg bg-sky-500 w-full sm:w-auto"}
        >
          <Link href={"/explore"}>
            Explore Projects <ArrowRight className="size-4 sm:size-5" />
          </Link>
        </Button>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-14 w-full'>
        {stateData.map((state) => (
          <StatsCard key={state.label} {...state} />
        ))}
      </div>
    </div>
  );
}

export default HeroSection
