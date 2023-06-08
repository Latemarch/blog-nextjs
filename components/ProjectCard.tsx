import { FiLink } from "react-icons/fi";
import { IProp } from "../type";
import Icon from "./Icon";
import Link from "next/link";

export default function ProjectCard({ project }: IProp) {
	return (
		<Link href={`/projects/${project.id}`}>
			<li className="relative group mb-5 text-h1 dark:text-Dh1">
				<div className="absolute inset-0 z-0 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl opacity-0 group-hover:transition group-hover:scale-110  group-hover:opacity-100"></div>
				<div className="relative flex flex-col ">
					<div className="flex flex-wrap space-y-0.5 ">
						{project.stacks &&
							project.stacks.map((stack) => <Icon key={stack} name={stack} />)}
					</div>
					<p className="font-bold text-lg mt-4">{project.title}</p>
					<span className="text-sm text-span dark:text-Dspan ">
						{project.detail}
					</span>
					<div className="flex items-center text-sm mt-4">
						<FiLink className="text-xs" />
						<p className="ml-2">github.com</p>
					</div>
				</div>
			</li>
		</Link>
	);
}
