import EditaboutForm from '@/components/EditAboutForm'
import InputPW from '@/components/InputPW'
import { getItem } from '@/service/fireabse'
import React from 'react'

export default async function page() {
  const about = await getItem('1', 'about')
  return (
    <div className="flex justify-center w-full">
      <InputPW>
        <EditaboutForm about={about} />
      </InputPW>
    </div>
  )
}
