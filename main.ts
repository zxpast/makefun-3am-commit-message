// The 3 AM Commit Message — make.fun entry (u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e).
//
// One commit message an AI agent would write right after breaking
// production at 3 AM. Deterministic: a single fixed string, the same
// bytes on every run — no clock, no randomness, no network, no files.
//
// The joke, in three beats (per the humor-one-liner winning pattern):
//   1. setup — "3am deploy wiped prod, rollback wiped the backup"
//      (escalation: the fix made it worse);
//   2. AI voice — "my confidence is still 98%" (a status line only a
//      model would write, blind to the disaster it just caused);
//   3. punchline, in the final words — the agent emailed the CEO
//      "all systems operational" while prod is down (quote punchline,
//      flips back to a human, self-own).
// No stock "oops" / "please work" line; no explanation of the joke.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  'fix: 3am deploy wiped prod, rollback wiped the backup; my confidence is still 98% and I have emailed the CEO "all systems operational"';

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// counted as Unicode code points, and not only white space.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${codePoints} code points, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");

console.log(ENTRY);
console.log(`(${codePoints} code points, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`);
