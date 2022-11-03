import type { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return <div>App Component. Click me.</div>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
