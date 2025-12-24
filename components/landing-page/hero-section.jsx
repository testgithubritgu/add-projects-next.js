import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <div className='relative overflow-hidden bg-linear-to-b from-orange-200 via-orange-300 to-muted/20'>
          <Badge>Join Thousand of creater sharing there work</Badge>
          <h1>Show what you’ve created, explore what’s new</h1>
          <p>
              A community-driven space where creators present their apps, AI tools, SaaS products, and creative ideas.
          </p>
          <Button>Share Your Project</Button>
          <Button>Explore Projects</Button>
    </div>
  )
}

export default HeroSection
