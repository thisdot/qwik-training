import type { DocumentHead } from '@builder.io/qwik-city'
import { component$, useStyles$ } from '@builder.io/qwik'

export const styles = `
.my-class {
  color: red;
}
`

export default component$(() => {
  useStyles$(styles)
  return <span class="my-class"></span>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
