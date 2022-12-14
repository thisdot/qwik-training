import { component$ } from '@builder.io/qwik'
import { ExerciseList } from '../../../components/exercise/exercise'

export const exercises = [
  {
    idx: 1,
    label: 'Exercise1: Unnamed slot',
  },
  {
    idx: 2,
    label: 'Exercise2: Named slots',
  },
  {
    idx: 3,
    label: 'Exercise3: Default content',
  },
]

export default component$(() => {
  return <ExerciseList exercises={exercises} module="module5"></ExerciseList>
})
