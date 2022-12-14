import { component$ } from '@builder.io/qwik'
import { ExerciseList } from '../../../components/exercise/exercise'

export const exercises = [
  {
    idx: 1,
    label: 'Exercise1: Render Test',
  },
  {
    idx: 2,
    label: 'Exercise2: Event Test',
  },
]

export default component$(() => {
  return <ExerciseList exercises={exercises} module="module7"></ExerciseList>
})