import type { DocumentHead } from '@builder.io/qwik-city'
import { component$, useStore } from '@builder.io/qwik'

export default component$(() => {
  const store = useStore({ count: 0 })
  console.log('Render: <App>')
  return (
    <Panel>
      Count: {store.count}. <button onClick$={() => store.count++}>+1</button>
    </Panel>
  )
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

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
