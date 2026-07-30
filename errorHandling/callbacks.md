Error-First Callbacks — Summary


An error-first callback is a function with the signature (err, data) => {...}, where the first parameter is always reserved for an error and the second for the actual result data. Inside, it checks if (err) first to handle failure, otherwise proceeds to use data. This is the standard convention used throughout Node (e.g. fs.readFile).
Two distinct roles in this pattern:

The callback itself (e.g. errorFirstCallback) — the function containing your specific logic for what to do with a result or error.
The async "wrapper" function (e.g. errorProneAsyncApi) — a function that accepts a callback as a parameter and invokes it later, once its async work (e.g. setTimeout) completes. The wrapper doesn't know or care what the callback does — it just calls it with (err, data) when ready.

Defined outside, invoked inside: The callback's actual code is typically written elsewhere (often locally, in the file using it) and passed in as a reference to the wrapper function. The wrapper holds that reference (as a parameter) and calls it internally — but the wrapper doesn't contain the callback's logic itself. This "defined outside, executed inside" relationship is what makes callbacks reusable: the wrapper stays generic, and different callbacks can be swapped in depending on what behavior is needed.
General pattern beyond error-first callbacks: This same structure applies to callbacks broadly in JS — e.g. .map(), addEventListener(), .then() — not just Node's error-first style. As a rule of thumb: reusable "worker" functions (the wrapper) tend to get imported from modules, while specific-use callbacks (the "what to do with the result") are often written locally where they're used — though callbacks can be imported too if the logic is reused elsewhere. There's no strict rule; it depends on whether the logic is generic/reusable or specific to one use case.