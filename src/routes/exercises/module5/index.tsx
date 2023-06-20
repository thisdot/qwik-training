import { component$ } from '@builder.io/qwik'
import { ExerciseList } from '../../../components/exercise/exercise'

export const exercises = [
  {
    idx: 1,
    label: 'Exercise 1: Unnamed slot',
  },
  {
    idx: 2,
    label: 'Exercise 2: Named slots',
  },
  {
    idx: 3,
    label: 'Exercise 3: Default content',
  },
]

export default component$(() => {
  return <ExerciseList exercises={exercises} module="module5"></ExerciseList>
})
