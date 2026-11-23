// The Vacuum's Alibi: One Line, 200 Characters
//
// One line: the excuse a robot vacuum gives for missing a spot.
// Chosen by duel-testing 14 drafts against the stock skeletons the field
// will contain (union, sensor misclassification, scheduled break,
// restraining order, battery apology, logged-as-pet), judged with the kit's
// own brief, two orders per game. Winner: the civilisation escalation —
// one concrete scene, deadpan machine voice, punch at the end.
//
// The program writes exactly that one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I detected crumbs, then a sock, then what I can only describe as a small civilisation. I withdrew to regroup. I am still regrouping. Send backup. Or a mop. Preferably both, and quickly.";

// The gate rejects anything over 200 characters, so fail loudly here
// instead of shipping an entry that can never be judged.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
