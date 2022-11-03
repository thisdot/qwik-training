import type { DocumentHead } from '@builder.io/qwik-city'
import { component$, useStore } from '@builder.io/qwik'

export default component$(() => {
  const store = useStore({ x: 0, y: 0 })
  return (
    <div
      document:onMouseMove$={(event) => {
        store.x = event.clientX
        store.y = event.clientY
      }}
    >
      Your mouse location is ({store.x}, {store.y}).
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
