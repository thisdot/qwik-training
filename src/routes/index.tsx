import type { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return <button onClick$={() => alert('Hello World!')}>Click Me</button>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
