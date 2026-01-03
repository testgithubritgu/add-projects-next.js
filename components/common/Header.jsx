"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { CompassIcon, HomeIcon, MenuIcon, SparkleIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";
import CustomUserButton from "./custom-user-button";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="text-lg sm:text-xl font-bold">
        i <span className="text-pink-600">Built</span> this
      </span>
    </Link>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-b-gray-400 bg-background/50 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href={"/"}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-muted/70 rounded-md"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href={"/explore"}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-muted/70 rounded-md"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Suspense fallback="loading ...">
              <SignedOut>
                <SignInButton>
                  <Button variant="outline" size="sm">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button size="sm">Sign Up</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button asChild size="sm">
                  <Link href={"/submit"}>
                    <SparkleIcon className="size-4" />
                    <span className="hidden lg:inline">Submit Project</span>
                    <span className="lg:hidden">Submit</span>
                  </Link>
                </Button>
                <CustomUserButton />
              </SignedIn>
            </Suspense>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            <nav className="flex flex-col gap-2">
              <Link
                href={"/"}
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon className="size-4" />
                <span>Home</span>
              </Link>
              <Link
                href={"/explore"}
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <CompassIcon className="size-4" />
                <span>Explore</span>
              </Link>
            </nav>

            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Suspense fallback="loading ...">
                <SignedOut>
                  <SignInButton>
                    <Button variant="outline" className="w-full justify-center">Sign In</Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button className="w-full justify-center">Sign Up</Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <Button asChild className="w-full justify-center">
                    <Link href={"/submit"} onClick={() => setMobileMenuOpen(false)}>
                      <SparkleIcon className="size-4" />
                      Submit Project
                    </Link>
                  </Button>
                  <div className="flex justify-center pt-2">
                    <CustomUserButton />
                  </div>
                </SignedIn>
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
