import { component$ } from '@builder.io/qwik'

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
      Currently the <tt>&lt;Panel&gt;</tt> component controls the content here.
      Replace this text with <tt>&lt;Slot&gt;</tt> element to see the content
      projected from the <tt>&lt;App&gt;</tt>.
    </div>
  )
})
