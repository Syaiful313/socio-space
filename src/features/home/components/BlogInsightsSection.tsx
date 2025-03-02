"use client";

import { Button } from "@/components/ui/button";

const BlogInsightsSection = () => {
  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12">
          <p className="mb-3 md:mb-4 text-xs sm:text-sm text-gray-600">
            STAY INFORMED WITH SOCIO SPACE BLOG
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Explore Insights, Tips, and Inspiration
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-gray-600">
              Dive into our blog, where we share valuable insights, tips, and
              inspirational stories on co-working, entrepreneurship,
              productivity, and more. Stay informed, get inspired, and enrich
              your journey with Socio Space.
            </p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8 border-t border-gray-200 pt-6 sm:pt-8">
          <article className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-6 gap-3 sm:gap-0">
            <h3 className="w-full sm:w-2/3 text-xl sm:text-2xl font-semibold">
              The Art of User Engagement: Strategies for Exceptional UX
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm">
              <span className="text-gray-600">Blog / Design</span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span className="text-gray-600">Sep 14, 2023</span>
            </div>
          </article>

          <article className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-6 gap-3 sm:gap-0">
            <h3 className="w-full sm:w-2/3 text-xl sm:text-2xl font-semibold">
              Content King: Reigning Supreme in the World of Digital Creativity
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm">
              <span className="text-gray-600">Blog / News</span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span className="text-gray-600">Sep 12, 2023</span>
            </div>
          </article>

          <article className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-6 gap-3 sm:gap-0">
            <h3 className="w-full sm:w-2/3 text-xl sm:text-2xl font-semibold">
              The UX Revolution: Crafting Intuitive User Experiences
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm">
              <span className="text-gray-600">Blog / Design</span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span className="text-gray-600">Sep 5, 2023</span>
            </div>
          </article>

          <article className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 gap-3 sm:gap-0">
            <h3 className="w-full sm:w-2/3 text-xl sm:text-2xl font-semibold">
              Graphic Design Unleashed: Innovation and Imagination at Work
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm">
              <span className="text-gray-600">Blog / News</span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span className="text-gray-600">Sep 4, 2023</span>
            </div>
          </article>
        </div>

        <div className="mt-8 flex items-center justify-center sm:justify-start text-center">
          <Button className="rounded-full px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-base sm:text-lg font-light">
            Read Blog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsightsSection;