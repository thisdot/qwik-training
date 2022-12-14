import { component$, useStore, useWatch$ } from '@builder.io/qwik'

interface AppStore {
  count: number
  delayCount: number
}

/**
 * Exercise 4-4: implement computed value with useWatch$()
 */
export default component$(() => {
  const store = useStore<AppStore>({
    count: 0,
    delayCount: 0,
  })
  console.log('Render: <App>')
  useWatch$(({ track }) => {
    track(() => store.count)
    const id = setTimeout(() => (store.delayCount = store.count), 2000)
    return () => clearTimeout(id)
  })
  return (
    <>
      <DisplayCount store={store} />
      <DisplayDelayCount store={store} />
      <button onClick$={() => store.count++}>+1</button>
    </>
  )
})

export const DisplayCount = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayA>')
  return <>{props.store.count}</>
})

export const DisplayDelayCount = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayB>')
  return <>{props.store.delayCount}</>
})