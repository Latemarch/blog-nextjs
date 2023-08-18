import { IButtons } from '@/type'
import Nav from './Nav'
import ThemeSwitch from './ThemeSwitch'

const buttons: IButtons = {
  Home: '/',
  About: 'about',
  Posts: 'posts',
  Projects: 'projects',
}

export default function Header() {
  return (
    <header className="flex h-24 justify-center sm:px-8 md:px-16 w-full">
      <div className="flex justify-center relative w-full items-center max-w-2xl lg:max-w-[960px] ">
        <Nav buttons={buttons} />
        <div className="absolute flex right-0 rounded-full items-center justify-center">
          <ThemeSwitch />
        </div>
      </div>
      {/* <div className="fixed left-0 opacity-0"><Login /></div> */}
    </header>
  )
}
