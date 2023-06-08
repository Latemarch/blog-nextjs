import { DefaultTags } from "@/defaultValues";
import Tag from "./Tag";

interface Props {
	handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
	getIconStyle: (arg: string) => React.CSSProperties;
}

export default function TagList({ getIconStyle, handleClick }: Props) {
	return (
		<ul className="flex space-x-2 mb-10">
			{DefaultTags.map((tag) => (
				<li key={tag}>
					<Tag name={tag} onClick={handleClick} style={getIconStyle(tag)} />
				</li>
			))}
		</ul>
	);
}
