import { component$ } from '@builder.io/qwik'

/**
 * Exercise 4-1: use useStore() to holde the counter data.
 */

export default component$(() => {
  const counter = { count: 0 }

  return (
    <>
      <div>Count: {counter.count}</div>
      <button onClick$={() => counter.count++}>+1</button>
    </>
  )
})
