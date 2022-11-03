import type { DocumentHead } from '@builder.io/qwik-city'
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

export const CmpButton = component$((props: CmpButtonProps) => {
  return <button onDblclick$={}>Double Click</button>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
