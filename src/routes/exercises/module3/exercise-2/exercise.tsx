import { component$ } from '@builder.io/qwik'

/**
 * Exercise 3-2: make the click handler to be a preventDefault
 * handler to prevent the default navigation behavior
 */
export default component$(() => {
  return (
    <a
      href="/"
      preventdefault:click
      onClick$={() => alert('do something other than navigate to home.')}
    >
      click me!
    </a>
  )
})
