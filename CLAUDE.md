<!-- prompt-review -->
## Prompt Review Logging

When the user says "start logging prompts for [feature name]":
1. Read the existing `prompt-log.json` in the project root (create it if missing)
2. Add a new feature object with a UUID v4 `id`, the given `name`, status `"logging"`, and `startedAt` as the current ISO 8601 timestamp
3. For each prompt/response cycle while logging is active:
   - Add an entry to the feature's `entries` array
   - `prompt`: the user's message, verbatim
   - `response`: summarize what you did in 1-3 sentences (not your full response)
   - `filesChanged`: list only file paths you actually modified on disk (not files you discussed)
   - `timestamp`: current ISO 8601 timestamp
4. When you believe the feature is complete, ask: "Feature looks done — should I stop logging?"
5. If the user confirms, set `status` to `"ready"` and `completedAt` to the current timestamp
6. Multiple features can be in `"logging"` state simultaneously — keep them separate in the array
7. Write valid JSON at all times. Do not modify entries for other features.