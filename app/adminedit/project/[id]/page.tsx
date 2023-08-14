import EditprojectForm from '@/components/EditProjectForm'
import { getItem } from '@/service/fireabse'
import React from 'react'

type Props = {
  params: { id: string }
}
export default async function page({ params: { id } }: Props) {
  const project = await getItem(id, 'projects')
  return (
    <div>
      <EditprojectForm project={project} />
    </div>
  )
}
