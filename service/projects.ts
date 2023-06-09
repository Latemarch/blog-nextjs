import { IProj } from "@/type";
import fs from "fs";
import path from "path";

export async function getAllProjects(listLen?: number): Promise<IProj[]> {
	const filePath = path.join(process.cwd(), "public", "datas", "projects.json");
	const fileContents = fs.readFileSync(filePath, "utf8");
	const projects: IProj[] = JSON.parse(fileContents);

	const sortedProjects = listLen
		? Object.values(projects)
				.map((el) => el)
				.sort((a, b) => b.createdAt - a.createdAt)
				.slice(0, listLen)
		: Object.values(projects)
				.map((el) => el)
				.sort((a, b) => b.createdAt - a.createdAt);

	return sortedProjects;
}

export async function getProject(id: string): Promise<IProj> {
	const filePath = path.join(process.cwd(), "public", "datas", "projects.json");
	const fileContents = fs.readFileSync(filePath, "utf8");
	const projects = JSON.parse(fileContents);
	const project = projects[id];
	if (!project) throw new Error(`${id}에 해당하는 post없음`);
	return project;
}
