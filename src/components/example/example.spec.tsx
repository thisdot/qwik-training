import { createDOM } from '@builder.io/qwik/testing'
import { test, expect } from 'vitest'
import { ExampleTest } from './example'

/**
 * Exercise 7-1: Unit test
 */
test(`[ExampleTest Component]: Should render ⭐`, async () => {
  const { screen, render } = await createDOM()
  // render ExampleTest component with flag true
  await render(<ExampleTest flag={true} />)
  expect(screen.outerHTML).toContain('⭐')
  const div = screen.querySelector('.icon') as HTMLElement
  expect(div.outerHTML).toContain('⭐')
})

test(`[ExampleTest Component]: Should render 💣`, async () => {
  const { screen, render } = await createDOM()
  // render ExampleTest component with flag false and expect the result
  await render(<ExampleTest flag={false} />)
  expect(screen.outerHTML).toContain('💣')
})

/**
 * Exercise 7-2: Unit test
 */
test(`[ExampleTest Component]: Click counter +1`, async () => {
  const { screen, render, userEvent } = await createDOM()
  await render(<ExampleTest flag={true} />)

  expect(screen.outerHTML).toContain('Count:0')

  const spanBefore = screen.querySelector('span') as HTMLDivElement
  // click count button
  // eslint-disable-next-line qwik/no-use-after-await
  await userEvent(screen.querySelector('button') as HTMLButtonElement, 'click')
  expect(spanBefore.innerHTML).toEqual('Count:1')

  const spanAfter = screen.querySelector('span') as HTMLDivElement
  // click count button and check the count result
  // eslint-disable-next-line qwik/no-use-after-await
  await userEvent(screen.querySelector('button') as HTMLButtonElement, 'click')
  expect(spanAfter.innerHTML).toEqual('Count:2')
})
