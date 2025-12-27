"use client"
import FormField from '../forms/form-field';
import { Button } from '../ui/button';
import { SparkleIcon } from 'lucide-react';

const ProductSubmitForm = () => {
  const handelSubmit = (e)=>{
    'use server'
    e.preventDefault();
    console.log('bhai form to submit ho gaya ')
  }
  return (
    <form className="space-y-6" onSubmit={handelSubmit}>
      <FormField
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Awesome Product"
        onChange={() => {}}
        error=""
      />

      <FormField
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-product"
        required={true}
        onChange={() => {}}
        error=""
        helperText={"URL-friendly version of your product name"}
      />

      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A brief, catchy description"
        required={true}
        onChange={() => {
          console.log("object");
        }}
        error=""
      />

      <FormField
        label="Description"
        name="description"
        id="description"
        placeholder="A brie,catchy description"
        required
        onChange={() => {}}
        error=""
        textarea
        helperText={"URL-friendly version of your product name"}
      />

      <FormField
        label="Website URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://yourproduct.com"
        required
        onChange={() => {}}
        error=""
        helperText="Enter your product's website or landing page"
      />

      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, Productivity, SaaS"
        required
        onChange={() => {}}
        error=""
        helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
      />

      <Button
        type="submit"
        className={"w-full bg-pink-600 cursor-pointer"}
        size="lg"
      >
        <SparkleIcon className="size-4" />
        Submit Product
      </Button>
    </form>
  );
};

export default ProductSubmitForm;
