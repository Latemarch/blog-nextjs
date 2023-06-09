"use client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	funky,
	coy,
	okaidia,
	tomorrow,
	materialDark,
	materialLight,
	materialOceanic,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";

interface Props {
	markdown: string;
}
export default function MarkdowkVeiwer({ markdown }: Props) {
	return (
		<ReactMarkdown
			className="prose max-w-none"
			components={{
				code({ node, inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || "");
					return !inline && match ? (
						<SyntaxHighlighter
							{...props}
							style={materialOceanic}
							language={match[1]}
							PreTag="div"
						>
							{String(children).replace(/\n$/, "")}
						</SyntaxHighlighter>
					) : (
						<code {...props} className={className}>
							{children}
						</code>
					);
				},
				// img: (image) => (
				// 	<Image
				// 		src={image.src || ""}
				// 		alt={image.alt || ""}
				// 		width={500}
				// 		height={400}
				// 	/>
				// ),
			}}
		>
			{markdown}
		</ReactMarkdown>
	);
}
