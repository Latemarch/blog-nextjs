'use client'
import { useForm } from 'react-hook-form'
import TagList from './TagList'
import { getStyle } from '@/service/functions'
import { useState } from 'react'
import { addItem } from '@/service/fireabse'
import { IPost } from '@/type'
import { useRouter } from 'next/navigation'

type Props = {
  post?: IPost
}
export default function EditPostForm({ post }: Props) {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [tags, setTags] = useState<string[]>(post?.tags ? post.tags : [])
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { name: tag } = e.currentTarget.dataset
    if (tag) {
      setTags((prev) =>
        prev.includes(tag) //
          ? prev.filter((el) => el !== tag)
          : [...prev, tag],
      )
    }
  }

  const onSubmit = async (data: any) => {
    const uploadData = { ...post, ...data, tags, category: 'posts' }
    const result = await addItem(uploadData)
    console.log(result)
    if (result.ok) {
      if (post?.id) router.push(`/posts/${post?.id}`)
      else router.push(`/posts/${data.id}`)
    }
  }

  return (
    <div className="App">
      <form
        className="flex flex-col text-gray-800 dark:text-gray-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Title:</label>
        <input
          defaultValue={post?.title}
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('title')}
        />
        <label>url:</label>
        <input
          defaultValue={post?.id}
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('id')}
        />
        <label>Tag:</label>
        <TagList
          handleClick={handleClick}
          getIconStyle={getStyle(tags, { color: '#37D4BF' })}
        />
        <label>Description:</label>
        <textarea
          defaultValue={post?.description}
          className="bg-gray-300 dark:bg-gray-700 p-2 h-32"
          {...register('description')}
        />
        <label>Body:</label>
        <textarea
          defaultValue={post?.body}
          className="bg-gray-300 dark:bg-gray-700 p-2 h-80"
          {...register('body')}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
