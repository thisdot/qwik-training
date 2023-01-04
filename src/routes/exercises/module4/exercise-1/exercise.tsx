import { component$, useSignal } from '@builder.io/qwik'

/**
 * Exercise 4-1: use useStore() to holde the counter data.
 */

export default component$(() => {
  const counter = useSignal(0)
  return (
    <>
      <div>Count: {counter.value}</div>
      <button onClick$={() => counter.value++}>+1</button>
    </>
  )
})
