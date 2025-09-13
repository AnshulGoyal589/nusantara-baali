// app/packages/[categorySlug]/page.tsx
import type { Metadata } from 'next';
import { packagesByCategory, categoryDetails } from '@/app/data';
import type { PackageCategory } from '@/app/data/types';
import { CategoryPageClient } from '@/app/(components)/ui/CategoryPageClient';
// **SEO Power**: Generate dynamic metadata for each category page
export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryEntry = Object.entries(categoryDetails).find(([, details]) => details.slug === resolvedParams.categorySlug);
  if (!categoryEntry) return { title: 'Category Not Found' };
  
  const title = categoryEntry[1].title;
  return {
    title: `${title} | Nusantara Travels`,
    description: `Browse our curated collection of ${title.toLowerCase()} for your next unforgettable journey.`,
  };
}

// **SEO Power**: Tell Next.js which pages to build
export async function generateStaticParams() {
  return Object.values(categoryDetails).map(details => ({
    categorySlug: details.slug,
  }));
}

// THIS IS NOW A SERVER COMPONENT
export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const resolvedParams = await params;
  const categoryEntry = Object.entries(categoryDetails).find(([, details]) => details.slug === resolvedParams.categorySlug);
  // console.log("Rendering category page for slug:", resolvedParams.categorySlug);
  if (!categoryEntry) {
    return <div className="text-center py-20">Category not found.</div>;
  }

  const categoryName = categoryEntry[0] as PackageCategory;
  const categoryPackages = packagesByCategory[categoryName] || [];
  const title = categoryEntry[1].title;
  // console.log("packages in category:", categoryPackages);
  // We pass all necessary data down to a single client component
  // This is a clean and robust pattern
  return (
    <CategoryPageClient
      title={title} 
      packages={categoryPackages} 
    />
  );
}