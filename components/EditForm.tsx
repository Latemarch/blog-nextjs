'use client'
import { useForm } from 'react-hook-form'

export default function EditForm() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="App">
      <form
        className="flex flex-col text-gray-800 dark:text-gray-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Title:</label>
        <input
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('title')}
        />
        <label>Stack:</label>
        <input
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('stacks')}
        />
        <label>Description:</label>
        <textarea
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('description')}
        />
        <label>Body:</label>
        <textarea
          className="bg-gray-300 dark:bg-gray-700 p-2"
          {...register('body')}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
