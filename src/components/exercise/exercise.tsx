import { NavItem } from '../link/NavItem'

export const ExerciseList = (props: {
  exercises: { idx: number; label: string }[]
  module: string
}) => {
  return (
    <div>
      <ul>
        {props.exercises.map((exercise) => (
          <NavItem
            href={`/exercises/${props.module}/exercise-${exercise.idx}`}
            label={exercise.label}
            key={exercise.label}
          ></NavItem>
        ))}
      </ul>
      <br />
    </div>
  )
}
