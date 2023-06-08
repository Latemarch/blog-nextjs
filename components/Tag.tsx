import { ITag } from "../type";

export default function Tag({ name, style, onClick }: ITag) {
	return (
		<div
			data-name={name}
			className="flex font-bold items-center justify-center p-1 px-3 bg-zinc-200 dark:bg-Dtab w-20 rounded-2xl text-xl cursor-pointer dark:text-zinc-200"
			style={style}
			onClick={onClick}
		>
			<p className="px-4">{name}</p>
		</div>
	);
}
