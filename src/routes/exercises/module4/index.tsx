import { component$ } from '@builder.io/qwik'
import { ExerciseList } from '../../../components/exercise/exercise'

export const exercises = [
  {
    idx: 1,
    label: 'Exercise1: Bind data with useStore()',
  },
  {
    idx: 2,
    label: 'Exercise2: Pass state to another component',
  },
  {
    idx: 3,
    label: 'Exercise3: Access data provided with useContext()',
  },
  {
    idx: 4,
    label: 'Exercise4: Computed value with useWatch$()',
  },
  {
    idx: 5,
    label: 'Exercise5: Fetch data from server and render with useResource$()',
  },
]

export default component$(() => {
  return <ExerciseList exercises={exercises} module="module4"></ExerciseList>
})
