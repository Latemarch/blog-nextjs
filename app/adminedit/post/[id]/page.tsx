import EditPostForm from '@/components/EditPostForm'
import { getItem } from '@/service/fireabse'
import React from 'react'

type Props = {
  params: { id: string }
}
export default async function page({ params: { id } }: Props) {
  const post = await getItem(id, 'posts')
  return (
    <div>
      <EditPostForm post={post} />
    </div>
  )
}
