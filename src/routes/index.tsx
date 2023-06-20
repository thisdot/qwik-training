import { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'
import { NavItem } from '../components/link/NavItem'

export const modules = [
  {
    href: '/exercises/module2',
    label: 'Module 2: Component Basics',
    key: 'Module2',
  },
  {
    href: '/exercises/module3',
    label: 'Module 3: Advanced Components',
    key: 'Module3',
  },
  {
    href: '/exercises/module4',
    label: 'Module 4: State Management',
    key: 'Module4',
  },
  {
    href: '/exercises/module5',
    label: 'Module 5: Content Projection',
    key: 'Module5',
  },
  {
    href: '/exercises/module6',
    label: 'Module 6: Styles',
    key: 'Module6',
  },
  {
    href: '/exercises/module7',
    label: 'Module 7: Unit Testing',
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
            <NavItem
              href={module.href}
              label={module.label}
              key={module.key || module.label}
            ></NavItem>
          ))}
        </ul>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
