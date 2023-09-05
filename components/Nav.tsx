"use client";
import { INav } from "@/type";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";

export default function Nav({ buttons }: INav) {
  const pathname = usePathname();
  const location = pathname.split("/")[1];
  const category = location === "" ? "home" : location;
  return (
    <ul className="relative z-50 flex px-2 text-h1 dark:text-white drop-shadow-md rounded-full bg-zinc-100 dark:bg-Dtab ring-1 ring-zinc-100 dark:ring-zinc-300/20">
      {Object.keys(buttons).map((key) => (
        <Link href={buttons[key]} key={key}>
          <div className="relative ">
            {key.toLocaleLowerCase() === category && (
              <div className="absolute -z-50 flex w-12 h-2 top-0 left-0 bottom-0 right-0 mx-auto my-auto"></div>
            )}
            <li key={key}>
              <Button
                name={key}
                style={
                  key.toLocaleLowerCase() === category
                    ? { color: "#37D4BF" }
                    : undefined
                }
              />
            </li>
          </div>
        </Link>
      ))}
      {/* {user?.isAdmin && (
				<Link to="/edit/post" key="edit">
					<li key="edit">
						<Button
							name="Edit"
							style={"edit" === category ? { color: "#37D4BF" } : undefined}
						/>
					</li>
				</Link>
			)} */}
    </ul>
  );
}
