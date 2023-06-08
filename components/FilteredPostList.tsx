"use client";
import PostList from "./PostList";
import { useState } from "react";
import { getStyle } from "@/service/functions";
import { IPost } from "@/type";
import TagList from "./TagList";

interface Props {
	posts: IPost[];
}

export default function FilteredPostList({ posts }: Props) {
	const [tags, setTags] = useState<string[]>([]);
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const { name: tag } = e.currentTarget.dataset;
		if (tag) {
			setTags((prev) =>
				prev.includes(tag) //
					? prev.filter((el) => el !== tag)
					: [...prev, tag]
			);
		}
	};
	const filteredPosts = !tags.length
		? posts
		: posts &&
		  posts.filter(
				(post: IPost) =>
					!!post.tags?.length &&
					!!tags.filter((tag) => post.tags?.includes(tag)).length
		  );
	return (
		<>
			<TagList
				handleClick={handleClick}
				getIconStyle={getStyle(tags, { color: "#37D4BF" })}
			/>
			<div className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-zinc-700/40 ">
				<PostList posts={filteredPosts} />
			</div>
		</>
	);
}
