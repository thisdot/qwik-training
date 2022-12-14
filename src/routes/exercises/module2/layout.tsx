import { component$ } from '@builder.io/qwik'
import { ExerciseLayout } from '../../../components/exercise/layout'

export default component$(() => {
  return (
    <ExerciseLayout
      module="module2"
      label="Module2: Component basic"
    ></ExerciseLayout>
  )
})
