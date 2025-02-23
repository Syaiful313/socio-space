import React from "react";
import Image from "next/image";
import { BlogPost } from "@/types/BlogPost";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-[400px] w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="mb-2 text-sm text-gray-500">{post.date}</p>
        <h3 className="mb-2 line-clamp-2 text-lg font-bold">{post.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {post.excerpt}
        </p>
        <Button className="rounded-full">
          <Link
            href={`/blog/${post.slug}`}
            className="px-6 py-2 text-sm font-light transition-colors"
          >
            Read Full Post
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
