import Query from '@/public/svgs/query.svg'
import Redux from '@/public/svgs/redux.svg'
import FB from '@/public/svgs/firebase.svg'
import TS from '@/public/svgs/ts.svg'
import React from '@/public/svgs/react.svg'
import Next from '@/public/svgs/nextjs.svg'
import PS from '@/public/svgs/planetscale.svg'
import { IIcon, iconName } from '../type'
import Image from 'next/image'

export const iconObj: Record<iconName, string> = {
  React,
  Next,
  TS,
  Query,
  Redux,
  FB,
  PS,
}
export default function Icon({ name, onClick, style }: IIcon) {
  return (
    <>
      {name === 'Next' ? (
        <Image
          data-name={name}
          onClick={onClick}
          className="mr-1 p-[2px] flex h-10 w-10 justify-center items-center rounded-full bg-zinc-100 dark:bg-zinc-400 ring-1 ring-zinc-700/5 overflow-hidden shadow-md full-gray"
          src={iconObj[name]}
          alt={iconObj[name]}
          style={style}
        />
      ) : (
        <div
          data-name={name}
          className="mr-1 p-2 flex h-10 w-10 justify-center items-center rounded-full bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-700/5 overflow-hidden shadow-md"
          onClick={onClick}
          style={style}
        >
          <Image
            className="scale-110"
            src={iconObj[name]}
            alt={iconObj[name]}
            width={40}
            height={40}
          />
        </div>
      )}
    </>
  )
}
