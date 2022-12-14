import { component$ } from '@builder.io/qwik'
import { ExerciseList } from '../../../components/exercise/exercise'

export const exercises = [
  {
    idx: 1,
    label: 'Exercise1: Binding expression',
  },
  {
    idx: 2,
    label: 'Exercise2: Props',
  },
  {
    idx: 3,
    label: 'Exercise3: Event Listener',
  },
]

export default component$(() => {
  return <ExerciseList exercises={exercises} module="module2"></ExerciseList>
})