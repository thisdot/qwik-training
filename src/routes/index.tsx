import type { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'

export const styles = `
.my-class {
  color: red;
}
`

export default component$(() => {
  return <span class="my-class"></span>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
