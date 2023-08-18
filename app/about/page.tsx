import MarkdowkVeiwer from '@/components/MarkdowkVeiwer'
import { getItem } from '@/service/fireabse'

export async function generateMetadata() {
  return {
    title: 'Latemarch | about',
    description: 'About me',
  }
}

const sections: { [key: string]: string } = {
  Introduction: 'introduction',
  'Contact & Work': 'contact',
  Skills: 'skills',
  Experience: 'experience',
  'Recent Interests': 'recent',
}

export default async function page() {
  const about = await getItem('1', 'about')
  return (
    <div className="dark:text-gray-200 ">
      <h1 className="text-2xl md:text-3xl md:p-2">
        Web Front-end Developer. 전준형
      </h1>
      {Object.entries(sections).map(([key, value]) => (
        <div className="md:flex py-4">
          <h2 className="text-xl shrink-0 md:p-2 md:py-3 md:w-1/4">{key}</h2>
          <MarkdowkVeiwer markdown={about[value]} />
        </div>
      ))}
    </div>
  )
}
