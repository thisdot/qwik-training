import type { DocumentHead } from "@builder.io/qwik-city";
import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ count: 1 });

  return (
    <div>
      <p>Count: {store.count}</p>
      <p>
        <button onClick$={() => store.count++}>Click</button>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
