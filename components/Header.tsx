import { IButtons } from "@/type";
import Nav from "./Nav";

const buttons: IButtons = {
	Home: "/",
	Posts: "posts",
	Projects: "projects",
};

export default function Header() {
	return (
		<header className="flex justify-center h-24 items-center w-full">
			<Nav buttons={buttons} />
			<div className="absolute flex right-0 rounded-full items-center justify-center">
				{/* <DarkModeSwitch
					onChange={handleClick}
					checked={isDark}
					sunColor={"gray"}
				/> */}
			</div>
			{/* <div className="fixed left-0 opacity-0"><Login /></div> */}
		</header>
	);
}
