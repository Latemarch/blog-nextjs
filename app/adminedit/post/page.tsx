import EditPostForm from '@/components/EditPostForm'

export default async function page() {
  // const post = await getItem('ecma', 'posts')

  return (
    <div>
      <EditPostForm />
    </div>
  )
}
