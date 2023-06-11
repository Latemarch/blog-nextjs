"use client";
import { useRef } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
interface Props {
	markdown: string;
}
export default function MarkdowkVeiwer({ markdown }: Props) {
	// const markdownRef = useRef();

	return (
		<ReactMarkdown
			className={`prose max-w-none`}
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
			}}
		>
			{markdown}
		</ReactMarkdown>
	);
}
