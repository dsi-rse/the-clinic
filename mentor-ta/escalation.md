---
title: "Escalation and Common Failure Modes"
---

# Escalation and Common Failure Modes

Most projects fail slowly and quietly. The clinic is designed around catching the common failures early and escalating the persistent or difficult ones fast. Even when clinic administration cannot immediately solve an escalated problem, the visibility lets us adjust the clinic as needed — so escalate early rather than absorbing the problem yourself.

## Who To Reach Out To

| Situation | Who |
| --- | --- |
| A technical problem you cannot solve (environment, Docker, cluster, tooling) | Clinic RSE / technical staff, via the mentor-TA Slack channel |
| A TA is not doing their job | Clinic director or associate director |
| A student is not pushing code, not attending, or not responding | Project mentor first; then clinic director or associate director |
| A student is behaving unprofessionally | Clinic director or associate director, immediately. This is not the mentor's or TA's problem to correct. |
| The external mentor is changing the project scope | Clinic director or associate director, before agreeing to anything |
| You have no idea what the team is doing or where the project should go | Clinic director or associate director |
| A student disputes a grade | Clinic director |

TAs escalate technical problems to clinic staff and everything else to the project mentor. Mentors escalate to the clinic director and associate director.

## What Happens When A Project Stalls

The classic stall looks like this: "Did we finish this week's tasks? Not quite, nothing is merged." Next week's task becomes "actually finish," and that repeats for the rest of the quarter.

To break out of it:

* Write **smaller, clearer tasks** with explicit acceptance criteria. If a task had to be repeated twice, it was too big.
* Mentors should coach this directly and reach out for help rather than waiting it out.
* Clinic administration runs `/clinic-review` across projects to scan for the signals of a stall — students with no commits pushed, students with no issues opened, issues without clear acceptance criteria — and intervenes.

## Other Ways Things Fall Apart

**Students aren't pushing code.** Escalate until they figure it out. Pushing code every week is a core clinic skill and is graded: no pushed code means a 0 for that week.

**The same task gets repeated over and over.** This is a project management problem, not a student problem. Bring it to the mentor meetings and ask for help.

**Work is diverging from the intention.** Don't give excessive deference to the student's preferred direction. Redirect, and escalate if the divergence persists.

**The external mentor is unpredictable.** Do not commit to any new project direction during the external mentor meeting. Useful phrases: "we'll have to check with clinic administration," "we'll have to figure out if we have time to finish this task." Then check.

**No one knows how to write tasks with clear acceptance criteria.** Keep trying — it is genuinely hard. Bring examples to the mentor meetings and we will work through them together.

**Students act as annotators or domain experts instead of data scientists.** Hand-labeling and domain reading are legitimate inputs, but they are not the deliverable. If a student's week consists entirely of annotation, the task was scoped wrong.

**The repo is a disaster** (for example, 25 unmerged branches). The fix is prevention: set the repo structure at the start of the quarter. The TA is the technical advisor for this, with mentor support. Once branches pile up mid-quarter, reconciliation is expensive.

## Data Science Guardrails

Mentors are responsible for making sure students are doing *reasonable* data science. Watch for:

* Testing on the training set.
* Claims the student cannot explain.
* Reporting "100% accuracy" on a problem where that is not achievable.
* Metrics reported without a baseline.

These are teaching moments, not failures — but they need to be caught before they reach the external partner.
