import PostList from "@/components/PostList";
import { getAllPosts } from "@/service/posts";

export default async function Posts() {
	const posts = await getAllPosts();
	return <PostList posts={posts} />;
}
