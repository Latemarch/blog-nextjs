import { CSSProperties } from "react";

export interface IEditProject {
	project: IProj;
	markDown: string;
	setMarkDown(e: any): void;
	handleStacks: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleInput: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	getIconStyle: (arg: string) => React.CSSProperties;
}

export interface IEditPost {
	post: IPost;
	markdown: string;
	handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
	handleInput(e: React.ChangeEvent<HTMLInputElement>): void;
	setMarkDown(e: any): void;
	getIconStyle: (arg: string) => React.CSSProperties;
	handleTags: (e: React.MouseEvent<HTMLDivElement>) => void;
}

type IButtons = {
	[key: string]: string;
};
export interface INav {
	buttons: IButtons;
}

export interface IModal {
	msg: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IProj {
	category: string;
	id: string;
	title: string;
	detail: string;
	body: string;
	createdAt: number;
	stacks: iconName[];
	git?: string;
	published?: string;
}
export interface IPost {
	category: string;
	id: string;
	author: string;
	title: string;
	body: string;
	createdAt: number;
	abstract?: string;
	tags?: string[];
}
export interface IPosts {
	posts: IPost[];
	handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
	getIconStyle: (arg: string) => React.CSSProperties;
}

export interface IUser {
	isAdmin: any;
	photoURL: string | null;
	uid: string;
	email: string | null;
	displayName: string | null;
}

interface IProp {
	project: IProj;
}

interface IPostFC {
	post: IPost;
	isAdmin: boolean;
	onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IPostCard {
	post: IPost;
}

export interface ITag {
	name: string;
	style?: React.CSSProperties | undefined;
	onClick?: (e: any) => void;
}

type iconName = "Query" | "Redux" | "FB" | "TS" | "React";
interface IIcon {
	name: iconName;
	onClick?: (e: any) => void;
	style?: CSSProperties | undefined;
}

type projectFilter = null | "React" | "ES6" | "ETC";

interface IProjectFilter {
	projectFilter: projectFilter;
}

type IsDark = boolean;
interface IDarkmodeSlice {
	isDark: IsDark;
}
interface IStore {
	darkMode: IDarkmodeSlice;
	user: IAuth;
}

interface IButton {
	name: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	style?: CSSProperties;
}
