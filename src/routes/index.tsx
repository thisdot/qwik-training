import type { DocumentHead } from '@builder.io/qwik-city'
import { component$, useStyles$ } from '@builder.io/qwik'

export const styles = `
span {
  color: red;
}
`

export default component$(() => {
  useStyles$(styles)
  return <span>Parent</span>
})

export const Child = component$(() => {
  return <span>Child</span>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
