import { getFormattedDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function LatestPost({ post }) {
  return (
    <Link href={`/blog/${post.node.slug}`}>
      <article className="mt-4">
        <h3 className="text-xl font-semibold">{post.node.title}</h3>
        <p className="text-gray-500">
          Posted on {getFormattedDate(post.node.publishedAt)}
        </p>
        <Image
          alt={post?.node.title}
          className="mt-4 object-cover rounded-md xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
          src={post.node.coverImage?.url}
          width={500}
          height={400}
        />
        <p className="mt-4 text-gray-700">{post.node.brief}</p>
      </article>
    </Link>
  );
}
