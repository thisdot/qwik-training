import { component$ } from '@builder.io/qwik'

/*
  Exercises 2-1
  Basic binding expressions.
  - Exercise step: Use `{}` to display `data.expression` to the textarea in the template.
  - Answer: Use `{data.description}` to display `data.description` in the template.
*/
export default component$(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = {
    name: 'Qwik',
    description: DESCRIPTION,
  }

  return (
    <>
      <textarea rows={10} cols={60}>
        {data.description}
      </textarea>
    </>
  )
})

export const DESCRIPTION = `
Qwik is designed for the fastest possible page load time,
by delivering pure HTML with near 0 JavaScript for your
pages to become interactive, regardless of how complex
your site or app is. It achieves this via resumability
of code.`
