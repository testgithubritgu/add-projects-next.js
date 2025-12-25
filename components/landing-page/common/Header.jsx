import { Button } from "@/components/ui/button";
import { CompassIcon, HomeIcon, SparkleIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 group ">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground " />
      </div>
      <span className="text-xl font-bold">
        i <span className="text-pink-600">Built</span> this
      </span>
    </Link>
  );
};
const Header = () => {
  const isSignIn = false;
  return (
    <header className="sticky  top-0 z-50 border-b border-b-gray-400 bg-background/50 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-12">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="flex items-center gap-1">
            <Link
              href={"/"}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-muted/70"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-muted/70"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {!isSignIn ? (
                <>
              <Button asChild>
                <Link href={"/submit"}>
                  <SparkleIcon className="size-4" />
                  Submit Project
                </Link>
              </Button>
              {/* clerk user  */}
              <Button variant="ghost">
                    <UserIcon /> 
              </Button>
                </>
            ) : (
              <>
                <Button variant="ghost">Sign In</Button>
                <Button>Sigh Up</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
