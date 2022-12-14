import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useContext,
} from '@builder.io/qwik'

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

/**
 * Exercise 4-3: Access todo data provided with useContext()
 */
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
