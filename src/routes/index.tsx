import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useContext,
} from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'

interface TodosStore {
  items: string[]
}
export const TodosContext = createContext<TodosStore>('Todos')

export default component$(() => {
  useContextProvider(
    TodosContext,
    useStore<TodosStore>({
      items: ['Learn Qwik', 'Build Qwik app', 'Profit'],
    })
  )

  return <Items />
})

export const Items = component$(() => {
  // replace this with context retrieval.
  const todos = useContext(TodosContext)

  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
