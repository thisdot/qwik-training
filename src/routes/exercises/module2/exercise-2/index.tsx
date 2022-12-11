import { component$ } from '@builder.io/qwik'

/*
  Exercises 2-2
  Props
  - Exercise step: Pass message via props to Greeter.
*/
interface ItemProps {
  message: string
}

export default component$(() => {
  const message = `Insert Greeter component here.`
  return <div>Insert Greeter component with message props here.</div>
})

export const Greeter = component$((props: ItemProps) => {
  return <div>{props.message}</div>
})
