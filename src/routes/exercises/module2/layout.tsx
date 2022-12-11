import { component$, Slot } from '@builder.io/qwik'
import { LinkHeader } from '../../../components/link/LinkHeader'

export default component$(() => {
  return (
    <>
      <div>
        <LinkHeader
          linkMetas={[
            { href: '/', label: 'Home' },
            { href: '/exercises/module2', label: 'Module2: Component Basic' },
          ]}
        ></LinkHeader>
        <span>Module 2: component basic</span>
      </div>
      <div>
        <Slot></Slot>
      </div>
    </>
  )
})
