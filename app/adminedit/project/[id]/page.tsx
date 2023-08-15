import EditprojectForm from '@/components/EditProjectForm'
import InputPW from '@/components/InputPW'
import { getItem } from '@/service/fireabse'
import React from 'react'

type Props = {
  params: { id: string }
}
export default async function page({ params: { id } }: Props) {
  const project = await getItem(id, 'projects')
  return (
    <div className="flex justify-center w-full">
      <InputPW>
        <EditprojectForm project={project} />
      </InputPW>
    </div>
  )
}
