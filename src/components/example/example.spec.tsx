import { createDOM } from '@builder.io/qwik/testing'
import { test, expect } from 'vitest'
import { ExampleTest } from './example'

/**
 * Exercise 7-1: Unit test
 */
test(`[ExampleTest Component]: Should render ⭐`, async () => {
  const { screen, render } = await createDOM()
  // render ExampleTest component with flag true
  expect(screen.outerHTML).toContain('⭐')
  const div = screen.querySelector('.icon') as HTMLElement
  expect(div.outerHTML).toContain('⭐')
})

test(`[ExampleTest Component]: Should render 💣`, async () => {
  const { screen, render } = await createDOM()
  // render ExampleTest component with flag false and expect the result
})

/**
 * Exercise 7-1: Unit test
 */
test(`[ExampleTest Component]: Click counter +1`, async () => {
  const { screen, render, userEvent } = await createDOM()
  await render(<ExampleTest flag={true} />)

  expect(screen.outerHTML).toContain('Count:0')

  const spanBefore = screen.querySelector('span') as HTMLDivElement
  // click count button
  expect(spanBefore.innerHTML).toEqual('Count:1')

  const spanAfter = screen.querySelector('span') as HTMLDivElement
  // click count button and check the count result
})
