import { IPost } from "@/type";
import PostCard from "./PostCard";
interface Props {
	posts: IPost[];
}
export default function PostList({ posts }: Props) {
	return (
		<ul>
			{posts &&
				posts.map((post: IPost) => (
					<li key={post.id}>
						<PostCard post={post} />
					</li>
				))}
		</ul>
	);
}
