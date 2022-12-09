import type { DocumentHead } from '@builder.io/qwik-city'
import { component$, useStore } from '@builder.io/qwik'

export default component$(() => {
  return <span>Parent</span>
})

export const Count = component$(() => {
  const store = useStore({ count: 0 })

  return (
    <div>
      <p>Count: {store.count}</p>
      <p>
        <button onClick$={() => store.count++}>Click</button>
      </p>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
