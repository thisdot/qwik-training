import { component$ } from '@builder.io/qwik'
import { ExerciseList } from '../../../components/exercise/exercise'

export const exercises = [
  {
    idx: 1,
    label: 'Exercise 1: Binding expression',
  },
  {
    idx: 2,
    label: 'Exercise 2: Props',
  },
  {
    idx: 3,
    label: 'Exercise 3: Event Listener',
  },
]

export default component$(() => {
  return <ExerciseList exercises={exercises} module="module2"></ExerciseList>
})
