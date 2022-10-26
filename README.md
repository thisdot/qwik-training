# Demo steps

1. Start app

```
npm run preview
```

it will open browser and the app.

2. Open the dev console tool->Networking, refresh the page, to demo no JS is downloaded.

3. For better code readability, stop the server, and run

```
npm run start
```

to start a dev server.

4. Check the dev tool -> source code page to show that the `constant 1K` JS code (which is the `qwik loader`) is inlined in to the `index.html`, no matter how big the app is, only this amount of the code will be inlined in the `index.html` when start the app.

5. Show the `qwik/json` part, to describe that `qwik` app is resumable, frontend doesn't replay (rebuild everything from zero), everything is from server (`template` and `data`).

6. How about the `event listener`? Open the dev console tool->Networking, click the button, to demo JS of the button click listener code is only downloaded when user do the action. Also check the downloaded code content to give a brief introduction about the `serialize` implementation (`useLexicalScope()`).

7. Open the dev tool -> Element tab, select root `<html>` node, copy the value as `JSON literial`, open another window and load any static content `http://localhost:5173/src/test.html`. open the dev tool -> element tab, select root `<html>` node, then open the `console tab`, input

```
$0.innerHTML=<the value copied ealier>
```

Then you can see the app is displayed there. But click the button, nothing work, since we need to `resume` the state by run the `<script>` in the html, then run the following code.

```
Array.prototype.slice.call(document.querySelectorAll('script')).filter(s => s.getAttribute('type') !== 'qwik/json').forEach(s => eval(s.text));
```

You will find out that the whole app is working including the button click.

So this demo show that the `Qwik` app is `resumable`, you can copy everything from window A to window B just like virtual machine image.
