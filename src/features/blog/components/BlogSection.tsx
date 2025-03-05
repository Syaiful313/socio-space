"use client";
import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const { blogs, isLoading } = useGetBlogs();

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading blogs...</p>;
  }

  return (
    <div id="blog" className="px-4 py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <BlogCard key={post.objectId} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
