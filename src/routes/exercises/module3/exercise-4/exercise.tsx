import { component$, PropFunction } from '@builder.io/qwik'

interface CmpButtonProps {
  onMyClick$?: PropFunction<() => void>
}

export default component$(() => {
  return (
    <CmpButton
      onMyClick$={() => alert('Button Component double clicked')}
    ></CmpButton>
  )
})

/**
 * Exercise 3-4: Add onDblclick event listener and trigger onMyClick callback
 * to implement custom event listener.
 */
export const CmpButton = component$((props: CmpButtonProps) => {
  return <button onDblclick$={props.onMyClick$}>Double Click</button>
})
