import MarkdowkVeiwer from '@/components/MarkdowkVeiwer'
import { formatDate } from '@/components/PostCard'
import { getItem, getItems } from '@/service/fireabse'
import { BsGithub } from 'react-icons/bs'
import { FiLink } from 'react-icons/fi'

interface Props {
  params: { id: string }
}
export async function generateStaticParams() {
  const projects = await getItems('projects')

  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params: { id } }: Props) {
  const projects = await getItem(id, 'projects')
  return {
    title: projects.title,
    description: projects.detail,
  }
}

export default async function Project({ params: { id } }: Props) {
  const project = await getItem(id, 'projects')

  return (
    <article className="m-0 pb-20 text-zinc-600 dark:text-zinc-400">
      <div className="mb-2">
        <h1 className="text-6xl font-bold text-h1 dark:text-white">
          {project.title}
        </h1>
        <div className="flex items-center">
          <p className="my-2 mr-4">{formatDate(project.createdAt)}</p>
        </div>
      </div>
      <div className="mb-2">{project.detail}</div>
      <div className="flex mb-10 gap-2 text-xl">
        {project.git && (
          <a href={project.git} target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        )}
        {project.published && (
          <a href={project.published} target="_blank" rel="noreferrer">
            <FiLink />
          </a>
        )}
      </div>

      <MarkdowkVeiwer markdown={project.body} />
      <div className="flex justify-end">
        <div className="flex items-center bg-zinc-200 dark:bg-Dtab my-5 rounded-md dark:text-zinc-100"></div>
      </div>
    </article>
  )
}
