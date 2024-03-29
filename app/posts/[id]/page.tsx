import Button from '@/components/Button'
import Giscus from '@/components/Giscus'
import MarkdowkVeiwer from '@/components/MarkdowkVeiwer'
import { formatDate } from '@/components/PostCard'
import Tag from '@/components/Tag'
import { getItem, getItems } from '@/service/fireabse'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}
export async function generateStaticParams() {
  const posts = await getItems('posts')

  return posts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getItem(id, 'posts')
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function page({ params: { id } }: Props) {
  const post = await getItem(id, 'posts')
  if (!post) return notFound()
  return (
    <article className="m-0 pb-20 text-zinc-800 dark:text-Dspan w-full">
      <div className="mb-12">
        <h1 className="text-6xl font-bold text-h1 dark:text-white">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-500">
          <p className="m-2">{formatDate(post.createdAt)}</p>
        </div>
        <ul className="flex mt-2 space-x-2">
          {post.tags &&
            post.tags.map((tag: string) => (
              <Tag key={tag} name={tag} style={{ color: '#37D4BF' }} />
            ))}
        </ul>
      </div>
      <MarkdowkVeiwer markdown={post.body} />
      <div className="flex justify-end my-10">
        <Link href="/posts" className="border rounded-lg">
          <Button name="목록으로" />
        </Link>
      </div>
      <Giscus />
      <div className="flex justify-end">
        <div className="flex items-center bg-zinc-200 dark:bg-Dtab my-10 rounded-md dark:text-zinc-100"></div>
      </div>
    </article>
  )
}
