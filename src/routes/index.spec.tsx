import { cre } from '@builder.io/qwik/testing'
import { test, expect } from 'vitest'
import Count from './index'

test(`[Card Component]: 🙌 Only render`, async () => {
  const { screen, render } = await createDocument()
  await render(<Card />)
  expect(screen.outerHTML).toContain('Counter_0')
})

test(`[Card Component]: 🙌 Click counter +1 `, async () => {
  const { screen, render, userEvent } = await await createDOM()
  await render(<Card />)
  expect(screen.outerHTML).toContain('Counter_0')
  await userEvent('button.btn-counter', 'click')
  expect(screen.outerHTML).toContain('Counter_1')
})
