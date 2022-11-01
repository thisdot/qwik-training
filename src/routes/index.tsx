import type { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return <span>{'__put_something_here__'}</span>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
