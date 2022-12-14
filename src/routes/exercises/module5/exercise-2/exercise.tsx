import { component$ } from '@builder.io/qwik'

/**
 * Exercise 5-2: use the named Slot to show content from parent.
 */
export default component$(() => {
  console.log('Render: <App>')
  return (
    <Panel>
      Default content from parent App component Header content from parent App
      component
    </Panel>
  )
})

export const Panel = component$(() => {
  console.log('Render: <Panel>')
  return (
    <div style={{ border: '2px solid red;', padding: '1em' }}>
      Currently the <tt>&lt;Panel&gt;</tt> component controls the content here.
      Replace this text with Default and named <tt>&lt;Slot&gt;</tt> element to
      see the default and header content projected from the <tt>&lt;App&gt;</tt>
      .
    </div>
  )
})
