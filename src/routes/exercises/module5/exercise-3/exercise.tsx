import { component$, Slot, useStyles$ } from '@builder.io/qwik'

/**
 * Exercise 5-3: Show default content if parent component doesn't pass content
 */
export default component$(() => {
  console.log('Render: <App>')
  return <Panel>Default content only without header</Panel>
})

export const Panel = component$(() => {
  console.log('Render: <Panel>')
  useStyles$(CSS)
  return (
    <div>
      <div class="header">
        <Slot name="header"></Slot>
      </div>
      <Slot />
    </div>
  )
})

export const CSS = `
.header {
  padding: 0.5em;
}

.header:empty::before {
  content: 'Fallback body';
  color: orange;
}
`
