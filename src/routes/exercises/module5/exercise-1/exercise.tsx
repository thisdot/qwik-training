import { component$, Slot } from '@builder.io/qwik'

/**
 * Exercise 5-1: use unamed default Slot to show content from parent.
 */
export default component$(() => {
  console.log('Render: <App>')
  return <Panel>Content from parent App component</Panel>
})

export const Panel = component$(() => {
  console.log('Render: <Panel>')
  return (
    <div style={{ border: '2px solid red;', padding: '1em' }}>
      <Slot />
    </div>
  )
})
