"use client"
import { addProductAction } from '@/lib/products/product-action';
import FormField from '../forms/form-field';
import { Button } from '../ui/button';
import { Loader2Icon, SparkleIcon } from 'lucide-react';
import { useActionState } from 'react';
import { cn } from '@/lib/utils';

const initialState = {
  success: false,
  errors: {},
  message: ""
}

const ProductSubmitForm = () => {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState
  );
  const { errors, success, message } = state

  return (
    <form className="space-y-4 sm:space-y-6 px-4 sm:px-0" action={formAction}>
      {message && (
        <div
          role='alert'
          aria-live='polite'
          className={cn(
            'p-3 sm:p-4 rounded-lg border text-sm sm:text-base',
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive border-destructive text-destructive"
          )}
        >
          {message}
        </div>
      )}

      <FormField
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Awesome Product"
        onChange={() => {}}
        error={errors?.name ?? []}
      />

      <FormField
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-product"
        required={true}
        onChange={() => {}}
        error={errors?.slug ?? []}
        helperText={"URL-friendly version of your product name"}
      />

      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A brief, catchy description"
        required={true}
        onChange={() => {}}
        error={errors?.tagline ?? []}
      />

      <FormField
        label="Description"
        name="description"
        id="description"
        placeholder="A brief, catchy description"
        required
        onChange={() => {}}
        error={errors?.description ?? []}
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
        error={errors?.websiteUrl ?? []}
        helperText="Enter your product's website or landing page"
      />

      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, Productivity, SaaS"
        required
        onChange={() => {}}
        error={errors?.tags ?? []}
        helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
      />

      <Button
        type="submit"
        className={"w-full bg-pink-600 cursor-pointer text-sm sm:text-base"}
        size="lg"
      >
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparkleIcon className="size-4" />
            Submit Product
          </>
        )}
      </Button>
    </form>
  );
};

export default ProductSubmitForm;
