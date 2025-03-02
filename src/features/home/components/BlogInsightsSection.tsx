"use client";

import { Button } from "@/components/ui/button";

const BlogInsightsSection = () => {
  return (
    <section className="bg-white px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-12">
          <p className="mb-4 text-sm text-gray-600">
            STAY INFORMED WITH SOCIO SPACE BLOG
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-6xl font-light">
              Explore Insights, Tips, and Inspiration
            </h2>
            <p className="max-w-xl text-start text-gray-600">
              Dive into our blog, where we share valuable insights, tips, and
              inspirational stories on co-working, entrepreneurship,
              productivity, and more. Stay informed, get inspired, and enrich
              your journey with Socio Space.
            </p>
          </div>
        </div>

        <div className="space-y-8 border-t border-gray-200 pt-8">
          <article className="flex items-center justify-between border-b border-gray-200 pb-6">
            <h3 className="w-2/3 text-2xl font-semibold">
              The Art of User Engagement: Strategies for Exceptional UX
            </h3>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Blog / Design</span>
              <span className="text-gray-600">Sep 14, 2023</span>
            </div>
          </article>

          <article className="flex items-center justify-between border-b border-gray-200 pb-6">
            <h3 className="w-2/3 text-2xl font-semibold">
              Content King: Reigning Supreme in the World of Digital Creativity
            </h3>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Blog / News</span>
              <span className="text-gray-600">Sep 12, 2023</span>
            </div>
          </article>

          <article className="flex items-center justify-between border-b border-gray-200 pb-6">
            <h3 className="w-2/3 text-2xl font-semibold">
              The UX Revolution: Crafting Intuitive User Experiences
            </h3>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Blog / Design</span>
              <span className="text-gray-600">Sep 5, 2023</span>
            </div>
          </article>

          <article className="flex items-center justify-between pb-6">
            <h3 className="w-2/3 text-2xl font-semibold">
              Graphic Design Unleashed: Innovation and Imagination at Work
            </h3>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Blog / News</span>
              <span className="text-gray-600">Sep 4, 2023</span>
            </div>
          </article>
        </div>

        <div className="mt-8 flex items-start text-center">
          <Button className="rounded-full px-12 py-4 text-lg font-light">
            Read Blog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsightsSection;
