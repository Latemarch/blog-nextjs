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

export async function addItem(item: IPost | IProj) {
  const id = item.id
    ? item.id
    : `${item.title.toLowerCase().trim().replace(/\s+/g, '-')}`

  return await set(
    ref(database, `nextjs/${item.category}/${id}`), //
    {
      ...item,
      id,
      createdAt: item.createdAt ? item.createdAt : Date.now(),
    },
  )
    .then((res) => {
      fetch(deployHookUrl)
      return {
        ok: true,
      }
    })
    .catch((error) => {
      return { ok: false }
    })
}

export const addItems = async (item: any) => {
  set(
    ref(database, `nextjs/projects`), //
    {
      ...item,
      createdAt: item.createdAt ? item.createdAt : Date.now(),
    },
  )
  return 'dada'
}

export const getItems = cache(
  async (item: string): Promise<any[]> => {
    const snapshot = await get(child(dbRef, `nextjs/${item}`))
    if (snapshot.exists()) {
      const data: any[] = Object.values(snapshot.val())
      data.sort((a, b) => b.createdAt - a.createdAt)
      return data
    }
    return []
  },
)

export const getItem = cache(
  async (id: string | undefined, category: string): Promise<any> => {
    const snapshot = await get(child(dbRef, `nextjs/${category}/${id}`))
    const item = snapshot.val()
    return item
  },
)

export async function updateItem(newData: any) {
  return update(dbRef, {
    [`nextjs/${newData.category}/${newData.id}`]: newData,
  })
    .then(() => console.log('updated'))
    .catch(console.log)
}
export function removeItem(item: IPost | IProj) {
  return remove(ref(database, `nextjs/${item.category}/${item.id}`))
}
