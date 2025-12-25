import FeaturedProducts from "@/components/landing-page/featured-section";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";


export default function Home() {
  return (
    <div>
    <HeroSection/>
    <FeaturedProducts/>
    <RecentlyLaunchedProducts />
    </div>
  );
}
 