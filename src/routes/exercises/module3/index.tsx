import { component$ } from '@builder.io/qwik'
import { ExerciseList } from '../../../components/exercise/exercise'

export const exercises = [
  {
    idx: 1,
    label: 'Exercise1: Global event listener',
  },
  {
    idx: 2,
    label: 'Exercise2: PreventDefault event listener',
  },
  {
    idx: 3,
    label: 'Exercise3: Programmatically event listener',
  },
  {
    idx: 4,
    label: 'Exercise4: Create a custom event',
  },
  {
    idx: 5,
    label: 'Exercise5: fetch data before render the component',
  },
  {
    idx: 6,
    label: 'Exercise6: useClientEffect$ to initialize a timer',
  },
]

export default component$(() => {
  return <ExerciseList exercises={exercises} module="module3"></ExerciseList>
})
