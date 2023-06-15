"use client";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function ThemeSwitch() {
	const { theme, setTheme } = useTheme();
	const handleClick = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<DarkModeSwitch
			className="mr-4 "
			onChange={handleClick}
			checked={theme ? (theme === "dark" ? true : false) : true}
			sunColor={"gray"}
			moonColor={"white"}
		/>
	);
}
