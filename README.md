# Demo steps

1. Start app

```
npm run preview
```

It will open a browser tab with the app.

2. Open Chrome Dev Tools and go to the "Network" tab. Refresh the page - you'll see no JS is downloaded.

3. For better code readability, stop the server, and run

```
npm run start
```

to start a dev server.

4. Check the Dev Tools -> "Source" tab to show that the `constant 1K` JS code (which is the `qwik loader`) is inlined in to the `index.html`, no matter how big the app is, only this amount of the code will be inlined in the `index.html` when you start the app.

5. Check out thee `qwik/json` part (`<script type="qwik/json">...</script>` in HTML source), to see how the `qwik` app serializes everything to QRLS to be resumable, frontend doesn't replay (rebuild everything from zero), everything is from server (`template` and `data`).

6. How about the `event listener`? Open the Dev Tools -> Network tab and click the button - see that the JS of the button click listener code is only downloaded when user performs the action. You can also open the downloaded script to see that the chunk uses a `useLexicalScope()` function. That is a part of Qwik's `serialize` implementation - you can read more in the [docs](https://qwik.builder.io/docs/advanced/qrl/#encoding-lexically-scoped-captured-variables).

7. Open Chrome Dev Tools -> Element tab, right click the root `<html>` node, select "Copy Element", open another window and load any static content, e.g. `http://localhost:5173/src/test.html` (you may need to dismiss an error overlay). Open the Dev Tools -> Element tab, select root `<html>` node, then right click the mouse and select menu item `Edit as HTML`, and paste the value just copied from previous step.

Then you can see the app is displayed there. But if you click the button, nothing works, since we need to `resume` the state by running (evaluating) the `<script>` in the HTML. To do that, we can run the following code:

```
Array.prototype.slice.call(document.querySelectorAll('script')).filter(s => s.getAttribute('type') !== 'qwik/json').forEach(s => eval(s.text));
```

You will find out that the whole app is now working including the button click.

So this demo shows that the `Qwik` app is `resumable`, you can copy everything from window A to window B just like a virtual machine image.
