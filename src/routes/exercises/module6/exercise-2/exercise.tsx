import { component$, useStylesScoped$ } from '@builder.io/qwik'

export const styles = `
span {
  color: red;
}
`

/**
 * Exercise 6-2: use useStylesScope$() to apply the styles only to the Parent component.
 */
export default component$(() => {
  useStylesScoped$(styles)
  return (
    <>
      <span>Parent</span>
      <br />
      <Child></Child>
    </>
  )
})

export const Child = component$(() => {
  return <span>Child</span>
})
