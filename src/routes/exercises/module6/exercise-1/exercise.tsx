import { component$ } from '@builder.io/qwik'

export const styles = `
.my-class {
  color: red;
}
`

/**
 * Exercise 6-1: use useStyles$() to apply the styles.
 */
export default component$(() => {
  return <span class="my-class"></span>
})
