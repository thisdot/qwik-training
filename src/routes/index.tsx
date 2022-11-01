import type { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'

interface ItemProps {
  message: string
}

export default component$(() => {
  const message = `Insert Greeter component here. By composing components together large applications can be
      written without putting all of the code into a single file/component.`
  return (
    <div>
      <Greeter message={message} />
    </div>
  )
})

export const Greeter = component$((props: ItemProps) => {
  return <div>{props.message}</div>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
