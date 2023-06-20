import { component$, useStore } from '@builder.io/qwik'

/**
 * Exercise 4-2: Pass state to the DisplayProps component
 */
interface CountStore {
  store: { count: number }
}

export default component$(() => {
  const store = useStore({ count: 0 })

  return (
    <>
      <button onClick$={() => store.count++}>+1</button>
      <Display store={store} />
    </>
  )
})

export const Display = component$<CountStore>(({ store }) => {
  return <div>The count is: {store.count}</div>
})
