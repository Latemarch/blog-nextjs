'use client'
import { useForm } from 'react-hook-form'
import { getStyle } from '@/service/functions'
import { useState } from 'react'
import { addItem } from '@/service/fireabse'
import { useRouter } from 'next/navigation'
import Icon, { iconObj } from './Icon'
import { iconName } from '@/type'

type Props = {
  project?: any
}
const icons: iconName[] = Object.keys(iconObj) as iconName[]
export default function EditprojectForm({ project }: Props) {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [stacks, setStacks] = useState<string[]>(
    project?.stacks ? project.stacks : [],
  )
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { name: stack } = e.currentTarget.dataset
    if (stack) {
      setStacks((prev) =>
        prev.includes(stack) //
          ? prev.filter((el) => el !== stack)
          : [...prev, stack],
      )
    }
  }

  const onSubmit = async (data: any) => {
    const uploadData = { ...project, ...data, stacks, category: 'projects' }
    const result = await addItem(uploadData)
    if (result.ok) router.push(`/projects/${data.id}`)
  }

  return (
    <div className="App">
      <form
        className="flex flex-col gap-2 text-gray-800 dark:text-gray-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex">
          {icons.map((icon) => (
            <Icon //
              key={icon}
              name={icon}
              onClick={handleClick}
              style={stacks.includes(icon) ? { filter: 'brightness(1.5)' } : {}}
            />
          ))}
        </div>
        <input
          placeholder="title"
          defaultValue={project?.title}
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('title')}
        />
        <input
          placeholder="/id"
          defaultValue={project?.id}
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('id')}
        />
        <input
          placeholder="/giturl"
          defaultValue={project?.id}
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('git')}
        />
        <input
          placeholder="/published url"
          defaultValue={project?.id}
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('published')}
        />
        <textarea
          placeholder="detail"
          defaultValue={project?.description}
          className="bg-gray-300 dark:bg-gray-700 p-2 h-32"
          {...register('description')}
        />
        <textarea
          placeholder="body"
          defaultValue={project?.body}
          className="bg-gray-300 dark:bg-gray-700 p-2 h-80"
          {...register('body')}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
