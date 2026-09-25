---
title: "Weekly Tasks Template"
---

# Weekly Tasks

Every week each student is responsible for a set of tasks assigned during the mentor session. Those tasks live in **GitHub issues**, not in a document.

## Requirements

After each mentor session, and **by midnight that same day**, each student must:

1. Open a GitHub issue (or issues) in the project repository describing their tasks for the coming week.
2. Include clear acceptance criteria for each task (see below).
3. Post a link to the issue(s) in the weekly Slack thread for the project.

By default, if a student has multiple tasks they may all live in a **single issue** with a checkbox per task. Splitting tasks across several issues is fine if the mentor, TA, or student prefers it, but it is not required.

## Writing Acceptance Criteria

Acceptance criteria are the specific, checkable conditions that make a task "done." A task without acceptance criteria cannot be graded and should not be assigned.

Good acceptance criteria:

* Are written as a checklist.
* Describe an artifact that can be delivered on GitHub within one week of work.
* Are specific enough that someone else on the team could tell whether they were met.

Note that **a task is not complete until the pull request addressing it has been merged to `main`.**

If a task does not involve writing code (for example, reading a paper), the acceptance criteria must still produce something publishable on GitHub — normally answers to a specific set of questions posted as a comment on the issue.

## Issue Template

```markdown
### Task: <short description>

**Assigned to:** @github-handle
**Week:** <week number>

**Context**
One or two sentences on why this task matters for the project.

**Acceptance criteria**
- [ ] <specific, checkable outcome>
- [ ] <specific, checkable outcome>
- [ ] Code is committed and pushed in a pull request
- [ ] Pull request is reviewed and merged to `main`

**Notes / resources**
Links to data, papers, prior issues or PRs.
```

## Carrying Tasks Over

If a student did not finish last week's tasks (meaning nothing was merged to `main`), the mentor decides which of the following applies:

1. **Larger than expected.** Enough work remains that the task can be re-assigned as this week's task.
2. **Poorly scoped.** The task was not doable or is no longer relevant. Close the issue as `not planned` and open a new issue that references the old one.
3. **Nearly done.** Only a small amount remains (for example, replying to TA review comments). The student opens new tasks for the coming week *and* must also finish the old one, referencing it in the new issue.
4. **No effort.** The task was well scoped and the student simply did not work on it. The task is repeated and the student is docked participation.

## Grading

Weekly tasks are graded on a 0-5 scale. See the [Weekly Tasks rubric](../rubrics/weekly-tasks-rubric.md).
