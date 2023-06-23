import { $, component$, useStore } from '@builder.io/qwik'

export const ExampleTest = component$((props: { flag: boolean }) => {
  const state = useStore({
    counter: 0,
  })

  const handleInput$ = $((e: any) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value)) state.counter = value
  })

  return (
    <>
      <span>Count:{state.counter}</span>
      <div class="icon">Flag: {props.flag ? '⭐' : '💣'}</div>
      <input
        class="input-counter"
        value={state.counter}
        onInput$={handleInput$}
      />
      <button class="btn-counter" onClick$={() => state.counter++}>
        Increment counter
      </button>
    </>
  )
})
