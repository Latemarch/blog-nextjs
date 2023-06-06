import Link from "next/link";

export default function Header() {
	console.log("header");
	return (
		<div>
			<Link href="/posts" className="px-8">
				POSTS
			</Link>
			<Link href="/projects">PROJECTS</Link>
		</div>
	);
}
