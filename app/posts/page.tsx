import FilteredPostList from "@/components/FilteredPostList";
import { getAllPosts } from "@/service/posts";

export async function generateMetadata() {
	return {
		title: "Latemarch | Post",
		description: "Blog posts",
	};
}
export default async function Posts() {
	const posts = await getAllPosts();
	return (
		<div className="relative pb-20 text-zinc-600">
			<div className="mb-4">
				<h1 className="text-4xl mb-4 tracking-tight text-h1 dark:text-Dh1">
					Front-end 관련 포스팅
				</h1>
				<span className="flex text-zinc-600 dark:text-zinc-400 max-w-[600px] text-justify">
					자바스크립트의 개념정리를 담은 글들은 ES, 리액트를 사용하면서 사용했던
					stack이나 library의 사용법등을 다룬 글들은 React로, 그외 내용을 담은
					글들은 ETC로 분류함.
				</span>
			</div>
			<FilteredPostList posts={posts} />
		</div>
	);
}
