import EditForm from '@/components/EditForm'
import { getItem } from '@/service/fireabse'

export default async function page() {
  const post = await getItem('ecma', 'posts')
  console.log(post)
  return (
    <div>
      <EditForm />
    </div>
  )
}
