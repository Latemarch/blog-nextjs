import Button from "@/components/Button";
import MarkdowkVeiwer from "@/components/MarkdowkVeiwer";
import { formatDate } from "@/components/PostCard";
import Tag from "@/components/Tag";
import { getAllPosts, getPost } from "@/service/posts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface Props {
	params: { id: string };
}
export async function generateStaticParams() {
	const posts = await getAllPosts();

	return posts.map((post) => ({
		id: post.id,
	}));
}

export default async function page({ params: { id } }: Props) {
	const post = await getPost(id);
	return (
		<article className="m-0 lg:m-20 pb-20 text-zinc-800 dark:text-Dspan">
			<div className="mb-12">
				<h1 className="text-6xl font-bold text-h1 dark:text-white">
					{post.title}
				</h1>
				<div className="flex items-center text-gray-500">
					<p className="m-2">{formatDate(post.createdAt)}</p>
				</div>
				<ul className="flex mt-2 space-x-2">
					{post.tags &&
						post.tags.map((tag) => (
							<Tag key={tag} name={tag} style={{ color: "#37D4BF" }} />
						))}
				</ul>
			</div>

			<MarkdowkVeiwer markdown={post.body} />
			<div className="flex justify-end">
				<div className="flex items-center bg-zinc-200 dark:bg-Dtab my-10 rounded-md dark:text-zinc-100"></div>
			</div>
		</article>
	);
}
