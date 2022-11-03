import type { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <a
      href="/"
      preventdefault:click
      onClick$={() => alert('do something else.')}
    >
      click me!
    </a>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
