import { component$, useStyles$ } from '@builder.io/qwik'

export const styles = `
.my-class {
  color: red;
}
`

/**
 * Exercise 6-1: use useStyles$() to apply the styles.
 */
export default component$(() => {
  useStyles$(styles)
  return <span class="my-class">Test data</span>
})
