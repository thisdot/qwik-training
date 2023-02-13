import { component$ } from '@builder.io/qwik'

/**
 * Exercise 4-2: Pass state to the DisplayProps component
 */
interface CountStore {
  count: number
}

export default component$(() => {
  const store = { count: 0 }

  return (
    <>
      <button onClick$={() => store.count++}>+1</button>
      <Display count={store.count} />
    </>
  )
})

interface DisplayProps {
  count: number
}
export const Display = component$((props: DisplayProps) => {
  return <div>The count is: {props.count}</div>
})
