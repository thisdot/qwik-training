import { component$ } from '@builder.io/qwik'
import { NavItem } from '../../../components/link/NavItem'

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
  return (
    <>
      <div>
        <ul>
          {exercises.map((exercise) => (
            <NavItem
              href={'/exercises/module2/exercise-' + exercise.idx}
              label={exercise.label}
            ></NavItem>
          ))}
        </ul>
        <br />
      </div>
    </>
  )
})
