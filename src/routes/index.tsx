import type { DocumentHead } from '@builder.io/qwik-city'
import { component$, useOn, $ } from '@builder.io/qwik'

export default component$(() => {
  useOn(
    'click',
    $(() => alert('Hello World!'))
  )

  return <div>App Component. Click me.</div>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
