import { BsChevronRight } from 'react-icons/bs'
import { IPostCard } from '../type'
import Link from 'next/link'

export default function PostCard({ post }: IPostCard) {
  return (
    <Link href={`/posts/${post.id}`}>
      <li className="relative group flex flex-col m-2 mb-10 h-40 md:h-36 md:flex-row">
        <div className="flex md:w-1/4 md:pl-3 text-zinc-600 dark:text-zinc-400 max-w-[200px]">
          <p className="md:hidden font-bold mr-3 text-zinc-600">|</p>
          <p>{formatDate(post.createdAt)}</p>
        </div>
        <div className="md:relative md:w-3/4">
          <div className="absolute opacity-0 -inset-x-4 inset-0 md:scale-100 md:rounded-2xl md:inset-0 z-0 bg-zinc-200/50 dark:bg-zinc-800/50 md:transition group-hover:scale-110 group-hover:opacity-100"></div>
          <div className="relative flex z-0 flex-col justify-between h-full ">
            <div className="flex flex-col">
              <h1 className="font-bold text-lg text-h1 dark:text-Dh1 mb-1">
                {post.title}
              </h1>
              <span className="line-clamp-3 text-span dark:text-zinc-400 text-justify">
                {post.description}
              </span>
            </div>
            <div className="pt-2 flex items-center text-green-500 dark:text-green-300 ">
              <p className="">Read post&nbsp; </p>
              <BsChevronRight className="text-sm" />
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export function formatDate(timestamp: number) {
  const date = new Date(timestamp)

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  const formattedDate = `${month} ${day}, ${year}`

  return formattedDate
}
