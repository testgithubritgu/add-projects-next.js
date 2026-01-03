'use cache'

import React from 'react'
import { getFeaturedData, getProductBySlug } from '@/lib/products/product-select'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, Calendar1Icon, ExternalLink, StarIcon, UserIcon } from 'lucide-react'
import SectionHeader from '@/components/common/section-header'
import { Badge } from '@/components/ui/badge'
import { date } from 'zod'
import { Button } from '@/components/ui/button'
export const generateStaticParams = async () => {
  const products = await getFeaturedData()
  return products.map(product => ({
    slug: product.slug
  }))
}
const Page = async ({ params }) => {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) {
    notFound()
  }
  const { name, description, tags, voteCount, websiteUrl, tagline } = product
  return (
    <div className='py-16'>
      <div className='wrapper'>
        <Link href={"/explore"} className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors'>
          <ArrowLeftIcon className='size-4' /> Back to Explore</Link>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          <div className='lg:col-start-2 space-y-6 '>
            <div className='flex items-start gap-6 mb-6'>
              <SectionHeader title={name} icon={StarIcon} description={tagline ?? ""} />
            </div>
            <div className='flex flex-wrap gap-2 '>
              {tags.map((tag) => (
                <Badge key={tag} variant={"secondary"}> {tag}</Badge>
              ))}
            </div>
          </div>

          <div className='prose prose-neutral  dark:prose-invert max-w-none'>
            <h2 className='text-xl font-semibold mb-4 '>

              About
            </h2>
            <p>{description}</p>
          </div>
          <div className='border rounded-lg p-6 bg-primary/10 '>
            <h2 className='text-lg font-semibold mb-4 '>Product details</h2>
            <div className='space-y-3'>
              {
                [
                  { label: "Launched:",icon:Calendar1Icon, value: new Date(product.createdAt?.toISOString() ?? "").toLocaleDateString() },
                  {label:"Submitted by:",icon:UserIcon,value:product.submittedBy}
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className='flex items-center gap-3 text-sm '>
                    {Icon && <Icon className='size-4 text-muted-foreground ' />}
                    <span className='text-muted-foreground '>{label}</span>
                    <span className='font-medium'>{value}</span>
                  </div>
                ))
              }
            </div>
          </div>
                <div className='lg:col-span-1'>
                  <div className='sticky top-24 space-y-4'>
                    <div className='border rounded-lg p-6 bg-background'>
                    <div className=' text-center mb-6'>
<p className=' text-sm text-muted-foreground mb-2 '>Support this Products</p>
                    </div>
                    </div>

                  </div>
                </div>
        </div>
        {websiteUrl && (
          <Button asChild className={"min-w-fit    mx-auto  rounded-lg "} variant='outline'>
            <a href={websiteUrl} target='_blank' rel='noopener noreferrer' className='w-fit'>
              Visit Website <ExternalLink  className='size-4 ml-2'/>
            </a>
          </Button>
        )}
        <h1>
          {name} {slug} {description}
        </h1>
      </div>
    </div>
  )
}

export default Page
