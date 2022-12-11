import { component$ } from '@builder.io/qwik'

/*
  Exercises 2-3
  Event Listener
  - Exercise step: Add handler to button
*/
export default component$(() => {
  return <button onClick$={() => alert('Hello World!')}>Click Me</button>
})
