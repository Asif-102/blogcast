import { getFormattedDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blog/${post.node.slug}`}>
        <Image
          alt="Cover image for A Guide to CSS Flexbox"
          className="object-cover w-full h-auto"
          src={post.node.coverImage.url}
          width={500}
          height={400}
        />
        <h3 className="text-xl font-semibold p-4">{post.node.title}</h3>
        <p className="text-gray-500 p-4">
          Posted on {getFormattedDate(post.node.publishedAt)}
        </p>
        <p className="mt-2 text-gray-700 p-4">{post.node.brief}</p>
      </Link>
    </div>
  );
}
