import { component$, Slot } from '@builder.io/qwik'

/**
 * Exercise 5-3: Show default content if parent component doesn't pass content
 */
export default component$(() => {
  console.log('Render: <App>')
  return <Panel></Panel>
})

export const Panel = component$(() => {
  console.log('Render: <Panel>')
  return (
    <div>
      <div class="header">
        <Slot name="header"></Slot>
      </div>
      <Slot />
    </div>
  )
})
