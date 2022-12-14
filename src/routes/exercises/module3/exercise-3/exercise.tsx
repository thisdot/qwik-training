import { component$, useOn, $ } from '@builder.io/qwik'

/**
 * Exercise 3-3: Add a click event listener programmatically
 * to this component.
 */
export default component$(() => {
  useOn(
    'click',
    $(() => alert('Hello World!'))
  )

  return <div>App Component. Click me.</div>
})
