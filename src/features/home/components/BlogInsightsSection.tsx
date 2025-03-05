"use client";

import { Button } from "@/components/ui/button";
import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

const BlogInsightsSection = () => {
  const { blogs } = useGetBlogs();

  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12">
          <p className="mb-3 text-xs text-gray-600 sm:text-sm md:mb-4">
            STAY INFORMED WITH SOCIO SPACE BLOG
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Explore Insights, Tips, and Inspiration
            </h2>
            <p className="max-w-xl text-sm text-gray-600 sm:text-base">
              Dive into our blog, where we share valuable insights, tips, and
              inspirational stories on co-working, entrepreneurship,
              productivity, and more. Stay informed, get inspired, and enrich
              your journey with Socio Space.
            </p>
          </div>
        </div>

        <div className="space-y-6 border-t border-gray-200 pt-6 sm:space-y-8 sm:pt-8">
          {blogs.map((post, index) => (
            <article
              key={index}
              className="flex flex-col gap-3 border-b border-gray-200 pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
            >
              <h3 className="w-full text-xl font-semibold sm:w-2/3 sm:text-2xl">
                {post.title}
              </h3>
              <div className="flex flex-col text-sm sm:flex-row sm:items-center sm:space-x-4">
                <span className="text-gray-600">Blog / Design</span>
                <span className="hidden text-gray-600 sm:inline">•</span>
                <span className="text-gray-600">
                  {formatDate(post.created)}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center text-center sm:justify-start">
          <Link href="/blogs">
            <Button className="rounded-full px-8 py-3 text-base font-light sm:px-10 sm:py-4 sm:text-lg md:px-12">
              Read Blog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogInsightsSection;
