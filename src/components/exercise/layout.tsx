import { Slot } from '@builder.io/qwik'
import { LinkHeader } from '../link/LinkHeader'

export const ExerciseLayout = (props: { module: string; label: string }) => {
  return (
    <div>
      <div>
        <LinkHeader
          linkMetas={[
            { href: '/', label: 'Home' },
            { href: `/exercises/${props.module}`, label: props.label },
          ]}
        ></LinkHeader>
      </div>
      <div>
        <Slot></Slot>
      </div>
    </div>
  )
}
