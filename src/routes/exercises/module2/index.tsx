import { Link } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'
import { NavItem } from '../../../components/link/NavItem'
import { LinkHeader } from '../../../components/link/LinkHeader'

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
        <LinkHeader linkMetas={[{ href: '/', label: 'Home' }]}></LinkHeader>
        <span>Module 2: component basic</span>
      </div>
      <div>
        <ul>
          {exercises.map((exercise) => (
            <NavItem
              href={'/exercises/module2/exercise-' + exercise.idx}
              label={exercise.label}
            ></NavItem>
          ))}
        </ul>
      </div>
    </>
  )
})
