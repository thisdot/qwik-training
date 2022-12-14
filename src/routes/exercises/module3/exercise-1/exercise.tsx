import { component$, useStore } from '@builder.io/qwik'

export default component$(() => {
  const store = useStore({ x: 0, y: 0 })
  /**
   * Exercise 3-1: Make mouseMove a global event listener
   */
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
