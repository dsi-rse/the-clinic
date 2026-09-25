---
title: "Weekly Report Template"
---

# Weekly Report

The weekly report is how you describe your progress on last week's tasks. It is posted as a **comment on the GitHub issue** that holds those tasks — there is no document to upload.

## Requirements

**By midnight on the day before your mentor session**, each student must:

1. **Submit the work on GitHub.**
    * If the task involved code, it must be committed and pushed in an open pull request.
    * If the task did not involve code (for example, reading a paper), the findings go in the issue comment.
2. **Comment on each of last week's issues** describing progress, using the status format below, and linking any related pull request.
3. **Post a link to those issue comments** in the weekly Slack thread for the project.
4. **Prepare a short update** on the work to present at the mentor session. Slides are recommended.

If no code was pushed for a task that required code, the student receives a **0 for the week**.

## Status Values

For each piece of acceptance criteria, mark exactly one status:

| Status | Meaning |
| --- | --- |
| `complete` | Criteria met and any code merged to `main`. |
| `pending review` | Criteria met and a pull request is open. Awaiting review from the TA. |
| `pending changes` | Pull request is open and the TA has submitted a review. |
| `in progress` | Code is pushed and a pull request is open, but the criteria are not yet met. |
| `no progress shared` | For code tasks, no code has been pushed to GitHub. For tasks requiring a report posted to the issue thread, nothing has been posted. |

Each status needs a short description alongside it. If the criteria are not `complete`, say **why**: was the task larger than one week of work? Was there not enough time to get started? Were there technical difficulties, and were they escalated?

Getting stuck is normal. Getting stuck and not telling anyone until the mentor session is not — raise blockers with your TA during the week, not at the meeting.

## Comment Template

```markdown
## Weekly Report — Week <n>

- <criteria 1>: `complete` — Merged in #<pr-number>.
- <criteria 2>: `pending review` — PR #<pr-number> awaiting TA review.
- <criteria 3>: `in progress` — Ran into <problem>; raised with TA on Wednesday.
- Hours worked: <n>
- Blockers: <one sentence, or "none">
```

## Grading

The weekly report is graded on a 0-5 scale. See the [Weekly Report rubric](../rubrics/weekly-report-rubric.md).
