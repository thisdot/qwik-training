import { DocumentHead, Link } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'
import { NavItem } from '../components/link/NavItem'

export const modules = [
  {
    href: '/exercises/module2',
    label: 'Module2: Component Basic',
    key: 'Module2',
  },
  {
    href: '/exercises/module3',
    label: 'Module3: Advanced Component',
    key: 'Module3',
  },
  {
    href: '/exercises/module4',
    label: 'Module4: State management',
    key: 'Module4',
  },
  {
    href: '/exercises/module5',
    label: 'Module5: Project Injection',
    key: 'Module5',
  },
  {
    href: '/exercises/module6',
    label: 'Module6: Styles',
    key: 'Module6',
  },
  {
    href: '/exercises/module7',
    label: 'Module7: Unit test',
    key: 'Module7',
  },
]

export default component$(() => {
  return (
    <>
      <div>
        <span>Exercises</span>
      </div>
      <div>
        <ul>
          {modules.map((module) => (
            <NavItem href={module.href} label={module.label}></NavItem>
          ))}
        </ul>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
