import { IPost, IProj } from "./type";
export const DefaultTags = ["Nextjs", "React", "ES", "ETC"];

export const DefaultPost: IPost = {
	category: "posts",
	id: "",
	createdAt: 0,
	author: "",
	title: "",
	body: "",
	tags: [],
};

export const DefaultProject: IProj = {
	category: "projects",
	id: "",
	createdAt: Date.now(),
	title: "",
	git: "",
	published: "",
	stacks: [],
	detail: "",
	body: "",
};
