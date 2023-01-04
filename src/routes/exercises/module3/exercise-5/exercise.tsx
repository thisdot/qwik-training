import { component$, useStore, useTask$ } from '@builder.io/qwik'

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

/**
 * Exercise 3-5: Fetch data before rendering the component.
 */
export default component$(() => {
  const store = useStore<{ users: User[] }>({
    users: [],
  })
  useTask$(async () => {
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
