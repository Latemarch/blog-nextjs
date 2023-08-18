'use client'
import { useForm } from 'react-hook-form'
import { addItem } from '@/service/fireabse'
import { useRouter } from 'next/navigation'

type Props = {
  about?: any
}
export default function EditaboutForm({ about }: Props) {
  const router = useRouter()
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    const uploadData = { ...about, ...data, id: '1', category: 'about' }
    const result = await addItem(uploadData)
    if (result.ok) {
      router.push(`/about`)
    }
  }

  return (
    <div className="App">
      <form
        className="flex flex-col text-gray-800 dark:text-gray-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Introduction</label>
        <textarea
          defaultValue={about?.introduction}
          className="bg-gray-300 dark:bg-gray-700 p-2 h-32"
          {...register('introduction')}
        />
        <label>url</label>
        <textarea
          defaultValue={about?.contact}
          className="bg-gray-300 dark:bg-gray-700 p-2 h-32"
          {...register('contact')}
        />

        <label>skills</label>
        <textarea
          defaultValue={about?.skills}
          className="bg-gray-300 dark:bg-gray-700 p-2 h-32"
          {...register('skills')}
        />
        <label>Experience</label>
        <textarea
          defaultValue={about?.experience}
          className="bg-gray-300 dark:bg-gray-700 p-2 h-32"
          {...register('experience')}
        />
        <label>Recent Interests</label>
        <textarea
          defaultValue={about?.recent}
          className="bg-gray-300 dark:bg-gray-700 p-2 h-32"
          {...register('recent')}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
