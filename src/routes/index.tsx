import { component$, useStore } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  const counter = { count: 0 }

  return (
    <>
      <div>Count: {counter.count}</div>
      <button onClick$={() => counter.count++}>+1</button>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
