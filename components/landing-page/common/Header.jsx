import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignIn, SignInButton, SignUp, SignUpButton, UserButton } from "@clerk/nextjs";
import { CompassIcon, HomeIcon, SparkleIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
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
            <Suspense fallback="loading ...">
              <SignedOut>
                <SignInButton>
                  <Button variant="primary">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button asChild>
                  <Link href={"/submit"}>
                    <SparkleIcon className="size-4" />
                    Submit Project
                  </Link>
                </Button>
                {/* clerk user  */}

                <UserButton />
              </SignedIn>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
