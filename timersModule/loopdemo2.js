/* 
Try running node event-loop-demo-unordered.js a handful of times in a row — you should occasionally see the last two lines swap order, unlike the previous file where the order was locked in every single run.
*/ 


// TOP-LEVEL SCHEDULING (not inside an I/O callback)
// This time, setTimeout and setImmediate are both called
// directly in the main script — NOT from inside a poll-phase
// callback like fs.readFile. This changes things.
// ─────────────────────────────────────────────

console.log('1. Start (synchronous)');

// ─────────────────────────────────────────────
// TIMERS PHASE (probably)
// At the top level, Node hasn't necessarily entered the
// event loop's phases yet in a predictable way — timing
// here depends on how fast the process initializes and
// how long it takes to reach the timers phase versus the
// check phase. With 0ms, it's close to instant either way.
// ─────────────────────────────────────────────
setTimeout(() => {
  console.log('Timers phase (setTimeout callback)');
}, 0);

// ─────────────────────────────────────────────
// CHECK PHASE (probably)
// setImmediate always runs in the check phase — but at the
// TOP LEVEL, whether the loop hits "timers" or "check" first
// on its very first pass is NOT guaranteed. It can depend on
// system performance, process startup overhead, and OS timer
// resolution.
// ─────────────────────────────────────────────
setImmediate(() => {
  console.log('Check phase (setImmediate callback)');
});

console.log('1b. End of synchronous code');

// ─────────────────────────────────────────────
// EXPECTED OUTPUT:
// 1. Start (synchronous)
// 1b. End of synchronous code
// then EITHER:
//   Timers phase (setTimeout callback)
//   Check phase (setImmediate callback)
// OR:
//   Check phase (setImmediate callback)
//   Timers phase (setTimeout callback)
//
// Try running this file several times in a row —
// the order of the last two lines can flip between runs.
// This is different from the previous example, where both
// were scheduled INSIDE an fs.readFile callback (already
// in the poll phase) — there, check always came right after
// poll, so setImmediate reliably won. Here, at the top level,
// neither phase has a guaranteed head start, so the order
// is not reliable.
// ─────────────────────────────────────────────