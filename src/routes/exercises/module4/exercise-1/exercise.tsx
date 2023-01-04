import { component$ } from '@builder.io/qwik'

/**
 * Exercise 4-1: use useStore() to holde the counter data.
 */

export default component$(() => {
  const counter = 0

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick$={() => counter}>+1</button>
    </>
  )
})
