// import { IPost } from "@/type";
// import fs from "fs";
// import path from "path";
// import { cache } from "react";

// export const getAllPosts = cache(async (listLen?: number): Promise<IPost[]> => {
// 	// export async function getAllPosts(listLen?: number): Promise<IPost[]> {
// 	const filePath = path.join(process.cwd(), "public", "datas", "posts.json");
// 	const fileContents = fs.readFileSync(filePath, "utf8");
// 	const posts: IPost[] = JSON.parse(fileContents);

// 	const sortedPosts = listLen
// 		? Object.values(posts)
// 				.map((el) => el)
// 				.sort((a, b) => b.createdAt - a.createdAt)
// 				.slice(0, listLen)
// 		: Object.values(posts)
// 				.map((el) => el)
// 				.sort((a, b) => b.createdAt - a.createdAt);

// 	return sortedPosts;
// });

// export const getPost = cache(async (id: string): Promise<IPost> => {
// 	// export async function getPost(id: string): Promise<IPost> {
// 	const filePath = path.join(process.cwd(), "public", "datas", "posts.json");
// 	const fileContents = fs.readFileSync(filePath, "utf8");
// 	const posts = JSON.parse(fileContents);
// 	const post = posts[id];
// 	// if (!post) throw new Error(`${id}에 해당하는 post없음`);
// 	return post;
// });
