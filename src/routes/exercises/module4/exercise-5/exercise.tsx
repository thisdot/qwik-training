import { component$, Resource, useResource$, useStore } from '@builder.io/qwik'

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
  })

  /**
   * Exercise 4-5: track input change and trigger fetch query from github
   * with useResource$().
   *
   * You should add your code here`
   */
  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    track(() => github.org)

    const controller = new AbortController()
    cleanup(() => controller.abort())

    return getRepositories(github.org, controller)
  })

  console.log('Render')
  return (
    <div>
      <span>
        GitHub username:
        <input
          value={github.org}
          onInput$={(ev) =>
            (github.org = (ev.target as HTMLInputElement).value)
          }
        />
      </span>
      <div>
        <Resource
          value={reposResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={`https://github.com/${github.org}/${repo}`}>
                    {repo}
                  </a>
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    </div>
  )
})

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log('FETCH', `https://api.github.com/users/${username}/repos`)
  const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
    signal: controller?.signal,
  })
  console.log('FETCH resolved')
  const json = await resp.json()
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json)
}
