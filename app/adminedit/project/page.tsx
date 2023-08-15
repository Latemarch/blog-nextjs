import EditprojectForm from '@/components/EditProjectForm'
import InputPW from '@/components/InputPW'

export default async function page() {
  return (
    <div className="flex justify-center w-full">
      <InputPW>
        <EditprojectForm />
      </InputPW>
    </div>
  )
}
