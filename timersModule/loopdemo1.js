/* 
Run it with node event-loop-demo.js — since both setTimeout and setImmediate are scheduled from inside the fs.readFile callback (already in the poll phase), the order is deterministic every time, matching the comments exactly.
*/



const fs = require('fs');

// ─────────────────────────────────────────────
// SYNCHRONOUS CODE
// This runs first, immediately, top to bottom —
// before the event loop even starts cycling through phases.
// ─────────────────────────────────────────────
console.log('1. Start (synchronous)');

// ─────────────────────────────────────────────
// POLL PHASE
// fs.readFile is async I/O. Node hands this off in the
// background and moves on. Its callback only runs once
// the file has actually been read — this is what puts us
// "inside" the poll phase when the callback eventually fires.
// ─────────────────────────────────────────────
fs.readFile(__filename, () => {
  console.log('2. Inside the poll phase (file read callback)');

  // ───────────────────────────────────────────
  // TIMERS PHASE
  // Even with a 0ms delay, setTimeout callbacks are only
  // handled once the loop comes all the way back around
  // to the TIMERS phase — a full lap of the cycle away
  // from where we currently are (poll).
  // ───────────────────────────────────────────
  setTimeout(() => {
    console.log('4. Timers phase (setTimeout callback)');
  }, 0);

  // ───────────────────────────────────────────
  // CHECK PHASE
  // setImmediate callbacks run in the CHECK phase, which
  // comes immediately after POLL — the very next phase,
  // not a full lap away. Because we're already inside a
  // poll-phase callback, this is guaranteed to run before
  // the setTimeout above, every single time.
  // ───────────────────────────────────────────
  setImmediate(() => {
    console.log('3. Check phase (setImmediate callback)');
  });
});

// ─────────────────────────────────────────────
// SYNCHRONOUS CODE (continued)
// Still runs immediately — before any of the async
// callbacks above have a chance to fire.
// ─────────────────────────────────────────────
console.log('1b. End of synchronous code');

// ─────────────────────────────────────────────
// EXPECTED OUTPUT ORDER:
// 1. Start (synchronous)
// 1b. End of synchronous code
// 2. Inside the poll phase (file read callback)
// 3. Check phase (setImmediate callback)
// 4. Timers phase (setTimeout callback)
//
// Because setImmediate and setTimeout are both scheduled
// from INSIDE the poll-phase callback here, their relative
// order is deterministic: check phase always comes right
// after poll, while timers is a full cycle away.
// ─────────────────────────────────────────────