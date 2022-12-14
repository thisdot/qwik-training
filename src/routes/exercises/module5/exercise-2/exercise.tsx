import { component$, Slot } from '@builder.io/qwik'

/**
 * Exercise 5-2: use the named Slot to show content from parent.
 */
export default component$(() => {
  console.log('Render: <App>')
  return (
    <Panel>
      <div q:slot="">Parent default message</div>
      <div q:slot="header">Parent header message</div>
    </Panel>
  )
})

export const Panel = component$(() => {
  console.log('Render: <Panel>')
  return (
    <div style={{ border: '2px solid red;', padding: '1em' }}>
      <div>
        Default content from parent:
        <Slot />
      </div>
      <div>
        Header content from parent:
        <Slot name="header" />
      </div>
    </div>
  )
})
