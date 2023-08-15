import EditPostForm from '@/components/EditPostForm'
import InputPW from '@/components/InputPW'
import { getItem } from '@/service/fireabse'
import React from 'react'

type Props = {
  params: { id: string }
}
export default async function page({ params: { id } }: Props) {
  const post = await getItem(id, 'posts')
  return (
    <div className="flex justify-center w-full">
      <InputPW>
        <EditPostForm post={post} />
      </InputPW>
    </div>
  )
}
