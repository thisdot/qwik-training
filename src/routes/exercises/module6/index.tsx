import { component$ } from '@builder.io/qwik'
import { ExerciseList } from '../../../components/exercise/exercise'

export const exercises = [
  {
    idx: 1,
    label: 'Exercise1: useStyles$()',
  },
  {
    idx: 2,
    label: 'Exercise2: useStylesScope$()',
  },
]

export default component$(() => {
  return <ExerciseList exercises={exercises} module="module6"></ExerciseList>
})