import { IPost } from "@/type";
import PostCard from "./PostCard";
interface Props {
	posts: IPost[];
}
export default function PostList({ posts }: Props) {
	return (
		<ul>
			{posts &&
				posts.map((post: IPost) => <PostCard key={post.id} post={post} />)}
		</ul>
	);
}
