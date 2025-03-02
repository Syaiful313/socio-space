import React from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/types/BlogPost";

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Art of User Engagement: Strategies for Exceptional UX",
      excerpt:
        "For UX designers, online portfolios are probably the most popular type today.",
      date: "SEP 14, 2023",
      imageUrl: "/blog1.avif",
      readTime: "5 min read",
      slug: "user-engagement-ux-strategies",
    },
    {
      id: "2",
      title:
        "Content King: Reigning Supreme in the World of Digital Creativity",
      excerpt:
        "You can find the link in your social media bio as well as send the info to.",
      date: "SEP 10, 2023",
      imageUrl: "/blog2.avif",
      readTime: "4 min read",
      slug: "content-king-digital-creativity",
    },
    {
      id: "3",
      title: "The UX Revolution: Crafting Intuitive User Experiences",
      excerpt:
        "The prediction is that by 2050, the job outlook for those two fields will bring.",
      date: "SEP 5, 2023",
      imageUrl: "/blog3.avif",
      readTime: "6 min read",
      slug: "ux-revolution-user-experiences",
    },
    {
      id: "4",
      title: "Graphic Design Unleashed: Innovation and Imagination at Work",
      excerpt:
        'Basis from the main canvas, and with the help tips for "Clicking" and have insights to an extra.',
      date: "SEP 4, 2023",
      imageUrl: "/blog4.webp",
      readTime: "5 min read",
      slug: "graphic-design-innovation",
    },
    {
      id: "5",
      title: "Designing for the Future: Trends in UI/UX and Web Development",
      excerpt:
        "Ones that how we have web apps, comparably and can start creating the component.",
      date: "AUG 30, 2023",
      imageUrl: "/blog5.avif",
      readTime: "7 min read",
      slug: "future-ui-ux-trends",
    },
  ];
  return (
    <div id="blog" className="px-4 py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
