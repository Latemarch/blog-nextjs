"use client";
import remarkGfm from "remark-gfm";
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
			className={`prose max-w-none text-justify `}
			remarkPlugins={[remarkGfm]}
			components={{
				code({ node, inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || "");
					return !inline && match ? (
						<SyntaxHighlighter
							{...props}
							style={materialOceanic}
							showLineNumbers={true}
							customStyle={{
								margin: 0,
								wordBreak: "break-all",
								whiteSpace: "pre-wrap",
								boxShadow: "0px 2px 4px rgba(50,50,93,.1)",
							}}
							lineNumberStyle={{
								textAlign: "right",
								marginLeft: "-0.5em",
							}}
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
