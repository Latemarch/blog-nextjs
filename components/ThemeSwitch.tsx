"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function ThemeSwitch() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const handleClick = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	return (
		<DarkModeSwitch
			className="mr-4 "
			onChange={handleClick}
			checked={theme === "dark" ? true : false}
			sunColor={"gray"}
			moonColor={"white"}
		/>
	);
}
