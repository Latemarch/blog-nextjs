'use client'
import React, { ReactNode, useState } from 'react'

type Props = {
  children: any
}

const passWord = process.env.NEXT_PUBLIC_PW!!
export default function InputPW({ children }: Props) {
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [pw, setPw] = useState<string | undefined>()

  if (!isCorrect) {
    return (
      <div className="flex flex-col w-80 items-center gap-4 mt-20 dark:text-gray-200">
        <h1>Input password to edit content</h1>
        <input
          className="bg-gray-300 dark:bg-gray-300 text-gray-800 p-2 rounded-md"
          value={pw}
          type="password"
          onChange={(e) => setPw(e.target.value)}
        />
        <button onClick={() => pw === passWord && setIsCorrect(true)}>
          Submit
        </button>
      </div>
    )
  }
  return <div className="w-full">{children}</div>
}
