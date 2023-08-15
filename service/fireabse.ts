import {
  child,
  get,
  getDatabase,
  ref,
  remove,
  set,
  update,
} from 'firebase/database'
import { initializeApp } from 'firebase/app'
import { IPost, IProj } from '../type'
import { cache } from 'react'

const deployHookUrl = process.env.NEXT_PUBLIC_VERCEL_DEPLOY_HOOK!!
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase()
const dbRef = ref(getDatabase(app))

const prepareData = (item: IPost | IProj, idOverride?: string) => {
  const id =
    idOverride ||
    item.id ||
    item.title.toLowerCase().trim().replace(/\s+/g, '-')
  return {
    ...item,
    id,
    createdAt: item.createdAt || Date.now(),
  }
}

export const addItems = async (item: any) => {
  const data = prepareData(item)
  await set(ref(database, `nextjs/projects`), data)
  return 'dada' // Unclear why 'dada' is returned. Consider returning a meaningful value.
}

export async function addItem(item: IPost | IProj) {
  const data = prepareData(item)
  try {
    await set(ref(database, `nextjs/${item.category}/${data.id}`), data)
    await fetch(deployHookUrl) // Make sure deployHookUrl is available in this scope
    return { ok: true }
  } catch (error) {
    console.error(error)
    return { ok: false }
  }
}

export const getItems = cache(
  async (item: string): Promise<any[]> => {
    const snapshot = await get(child(dbRef, `nextjs/${item}`))
    if (snapshot.exists()) {
      const data: any[] = Object.values(snapshot.val())
      return data.sort((a, b) => b.createdAt - a.createdAt)
    }
    return []
  },
)

export const getItem = cache(
  async (id: string | undefined, category: string): Promise<any> => {
    const snapshot = await get(child(dbRef, `nextjs/${category}/${id}`))
    return snapshot.val()
  },
)

export const updateItem = async (newData: any) => {
  try {
    await update(dbRef, {
      [`nextjs/${newData.category}/${newData.id}`]: newData,
    })
    console.log('updated')
  } catch (error) {
    console.error(error)
  }
}

export const removeItem = (item: IPost | IProj) => {
  return remove(ref(database, `nextjs/${item.category}/${item.id}`))
}

// export async function addItem(item: IPost | IProj) {
//   const id = item.id
//     ? item.id
//     : `${item.title.toLowerCase().trim().replace(/\s+/g, '-')}`

//   return await set(
//     ref(database, `nextjs/${item.category}/${id}`), //
//     {
//       ...item,
//       id,
//       createdAt: item.createdAt ? item.createdAt : Date.now(),
//     },
//   )
//     .then((res) => {
//       fetch(deployHookUrl)
//       return {
//         ok: true,
//       }
//     })
//     .catch((error) => {
//       return { ok: false }
//     })
// }

// export const addItems = async (item: any) => {
//   set(
//     ref(database, `nextjs/projects`), //
//     {
//       ...item,
//       createdAt: item.createdAt ? item.createdAt : Date.now(),
//     },
//   )
// }
