import type { DocumentHead } from '@builder.io/qwik-city'
import { component$, useStore, useMount$ } from '@builder.io/qwik'

export const db = {
  requestUsers: async function (): Promise<User[]> {
    return Promise.resolve([
      {
        name: 'Tom',
      },
      {
        name: 'Jerry',
      },
    ])
  },
}

export default component$(() => {
  const store = useStore<{ users: User[] }>({
    users: [],
  })
  useMount$(async () => {
    // This code will run on component creation to fetch the data.
    store.users = await db.requestUsers()
  })
  return (
    <>
      {store.users.map((user) => (
        <User user={user} />
      ))}
    </>
  )
})

interface User {
  name: string
}

export function User(props: { user: User }) {
  return <div>Name: {props.user.name}</div>
}

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
