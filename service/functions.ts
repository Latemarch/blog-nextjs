/**
 * You can import this function in the parent component, pass the array and style to the function, then pass it as a prop to the child component. In the child component, you can pass the element to the function as an argument to search for it in the array.
 * @param array:string[]
 * @param style:CSSProperties
 * @returns CSSProperties
 */
export function getStyle(array: string[], style: React.CSSProperties) {
	return function (el: string) {
		if (!el) return {};
		if (!array) return {};
		return array.includes(el) ? style : {};
	};
}
export function extractTextFromMarkdown(markdownText: string) {
	// Remove headers
	const withoutHeaders = markdownText.replace(/#+\s*(.*?)\s*#*/g, "$1\n");

	// Remove emphasis (italic)
	const withoutEmphasis = withoutHeaders.replace(/_([^_]+)_/g, "$1");

	// Remove strong emphasis (bold)
	const withoutStrongEmphasis = withoutEmphasis.replace(
		/\*\*([^*]+)\*\*/g,
		"$1"
	);

	// Remove code blocks
	const withoutCodeBlocks = withoutStrongEmphasis.replace(
		/```[\s\S]*?```/g,
		""
	);

	// Remove inline code
	const withoutInlineCode = withoutCodeBlocks.replace(/`([^`]+)`/g, "$1");

	// Remove unordered list items
	const withoutUnorderedList = withoutInlineCode.replace(/^- (.*)/g, "$1\n");

	// Remove ordered list items
	const withoutOrderedList = withoutUnorderedList.replace(
		/^\d+\. (.*)/g,
		"$1\n"
	);

	// Remove blockquotes
	const withoutBlockquotes = withoutOrderedList.replace(/^> (.*)/g, "$1\n");

	// Remove horizontal rules
	const withoutHorizontalRules = withoutBlockquotes.replace(
		/^\s*([-_*]){3,}\s*$/g,
		""
	);

	// Remove links
	const withoutLinks = withoutHorizontalRules.replace(
		/\[([^\]]+)\]\([^)]+\)/g,
		"$1"
	);

	// Remove images
	const withoutImages = withoutLinks.replace(/!\[([^\]]+)\]\([^)]+\)/g, "$1");

	const withoutATags = withoutImages.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "");
	const withoutImgTags = withoutATags.replace(/<img\b[^>]*>/gi, "");
	// Trim whitespace
	const trimmedText = withoutImgTags.trim();

	return trimmedText;
}
