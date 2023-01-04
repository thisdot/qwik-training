import { component$, useStore, useOnDocument, $ } from '@builder.io/qwik'

export default component$(() => {
  const store = useStore({ x: 0, y: 0 })
  useOnDocument(
    'mousemove',
    $((event: Event) => {
      store.x = (event as MouseEvent).clientX
      store.y = (event as MouseEvent).clientY
    })
  )
  /**
   * Exercise 3-1: Make mouseMove a global event listener
   */
  return (
    <div>
      Your mouse location is ({store.x}, {store.y}).
    </div>
  )
})
