import EditPostForm from '@/components/EditPostForm'
import InputPW from '@/components/InputPW'

export default async function page() {
  return (
    <div className="flex justify-center w-full">
      <InputPW>
        <EditPostForm />
      </InputPW>
    </div>
  )
}
