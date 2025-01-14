import { getAllPosts } from "@/queries/blog-data";
import LatestPost from "./latest-post";
import PostCard from "./post-card";

export default async function PostList() {
  const posts = await getAllPosts();

  // posts are sorted by time. Get the latest one
  const latestPost = posts[0];

  // rest of the posts to handle separately
  const restPosts = posts.slice(1);

  return (
    <>
      <div className="px-8 py-8 bg-gray-100">
        <LatestPost post={latestPost} />
      </div>
      {restPosts.length > 0 && (
        <div>
          <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {restPosts.map((post) => (
              <PostCard key={post?.node?.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
