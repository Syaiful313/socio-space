import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import React from "react";

interface BlogCardProps {
  post: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-[200px] w-full md:h-[400px]">
        <Image
          src={post.thumbnail}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="mb-2 text-sm text-gray-500">{formatDate(post.created)}</p>
        <h3 className="mb-2 line-clamp-2 text-lg font-bold">{post.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {post.description}
        </p>
        <Button className="rounded-full">Read Full Post</Button>
      </div>
    </div>
  );
};

export default BlogCard;
