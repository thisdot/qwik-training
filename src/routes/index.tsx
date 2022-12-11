import { DocumentHead, Link } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'
import { NavItem } from '../components/link/NavItem'

export default component$(() => {
  return (
    <>
      <div>
        <span>Exercises</span>
      </div>
      <div>
        <ul>
          <NavItem
            href="/exercises/module2"
            label="Module2: Component Basic"
          ></NavItem>
        </ul>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
}
