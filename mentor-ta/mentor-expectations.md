---
title: "Mentor Expectations"
---

## Mentor Expectations

This document contains a rough outline of the expectations for the mentor. At the highest level there are six core responsibilities:

1. **Project Leadership and Management**
    * General project oversight
    * Guide overall project direction and objectives
    * Stay on top of student progress through [weekly cycle](#the-weekly-cycle), ensuring timely completion of client deliverables and documentation
    * Assign each student a task each week with clear acceptance criteria
    * Provide technical project guidance and direction based on your own expertise
2. **Communication with External Partner**
    * Act as a liaison between the external mentor and the students
    * Make sure that meetings are productive, students are attending and acting professionally
    * Scheduling and reacting to changes from the partners
    * Do not commit to new project directions during the external mentor meeting
3. **Communication with Team**
    * Be responsive to student and TA needs, making sure to communicate regularly via Slack
4. **Teaching**
    * Provide resources for learning specific topics or technologies
    * Work with TAs to guide student learning
    * Ensure students are doing reasonable data science — not testing on training sets, not making claims they don't understand, not reporting "100% accuracy" when that is not achievable
5. **Project Guardrail**
    * Act as a guardrail on the project and raise concerns based on your understanding of people, group dynamics and generally "being a responsible adult"
    * Escalate issues to clinic staff when needed

## The Weekly Cycle

Student work lives in GitHub. Each week, students open issues describing their tasks with clear acceptance criteria, push code to pull requests, and post their progress as comments on their issues. Your job is to review that work before the meeting, run the meeting, and assign the next week's tasks. You are not expected to go deep into the project code -- that is the TA's responsibility.

### Before Each Meeting

Review the students' work and run the `/clinic-project-review` Claude skill on the project repository. The skill reports:

* Actual progress on last week's tasks
* Who hasn't pushed
* What is not yet merged into `main`
* Whether the TA has reviewed the code
* A menu of potential tasks for next week, each deliverable on GitHub within a week of work

With that in hand:

* Push TAs and students who aren't completing their work.
* Consider whether the direction of work still makes sense for the project's goals.
* Decide next steps for each student that you think make sense.
* Escalate anything that needs it to clinic administration — students or TAs not working, project direction unclear or off track, or you genuinely have no idea where the students should be heading. See [escalation](./escalation.md).

### At Each Meeting

* Have each student share their update.
    * Slides are recommended, with students sharing their screens.
    * Don't let one long update dominate the meeting. Use a timer if necessary.
    * **Do not debug code in the meeting.** Send it to the TA session.
* Assign next week's tasks.
    * Make sure each task has clear acceptance criteria.
    * Make sure each student understands their task.
    * Make sure each task can be published on GitHub. If you have a student read a paper, part of the task should be answering a specific set of questions and putting the findings in a comment on the issue.

Detailed meeting mechanics are in [How to Run a Mentor Meeting](./how-to-run-a-meeting.md).

### Carrying Tasks Over

If a student did not finish last week's tasks — meaning nothing was merged to `main` — you decide which of these applies:

1. **Larger than expected, but still reasonable.** Enough work remains that it can be the student's task again. Take time to consider whether it is still too big to be completed in the next week (it usually is). If it is, this is case 2.
2. **Poorly scoped or unreasonably large.** Not doable, no longer relevant, or much too big to complete in the next week. Close the issue as `not planned` and open a new issue referencing the old one.
3. **Nearly done.** Only a small amount remains (such as replying to TA review comments). The student opens new tasks for next week and must also complete the old one, referenced in the new issue.
4. **No effort.** The task was well scoped and the student simply didn't work. Repeat the task and dock participation.

## Grading Requirements and How to Grade

To keep projects moving, each student receives a single 0-5 score per week covering their weekly tasks, pushed work product, and weekly report. The full rubric is the [weekly report and work product rubric](../rubrics/weekly-report-rubric.md).

Two rules worth internalizing:

* A task is not complete until the pull request addressing it is merged to `main`.
* If a task required code and no code was pushed, the student receives a 0 for the week.

During the final weeks of the quarter there are also deliverables around the video and one-pager. Information on the specific deliverables can be found [here](../students/index.md#finals-week-deliverables).

All grades are submitted via [Canvas](https://courses.uchicago.edu/). You should have received an invite at the start of the quarter.

To grade I recommend using the grade book (accessed by clicking "Grades" on the main sidebar) and the speed grader (accessed through each individual assignment). On the grade book page you can filter to your group by clicking "Apply Filters" -> "Student Groups" and selecting your group.

The speed grader allows you to quickly go through the members of your team if you have it filtered from the grade book.

Do not fall behind on grading and establish habits early!

## Minimum Expectations for Mentors

* Meet weekly with the students (1 hour). While we prefer students to meet in-person with mentors, this can be via Zoom.
* Run `/clinic-project-review` on the project repo before each meeting.
* Assign every student a task each week with clear acceptance criteria that can be delivered on GitHub.
* Assessment via Canvas:
    * Grade the weekly report and work product according to the rubric.
    * Grade draft videos and one-pagers.
* Provide guidance to students around their problem.
* Provide resources for solving problems.
* Be available on email & Slack (check in each day to answer questions).
* Act as a communication conduit between the external mentor and the team.
* Ensure students and TAs are completing their responsibilities.
* Ensure the project is staying on track, and reach out for help if it is not.
* Raise concerns to clinic staff.
* Provide qualitative feedback on students.

## Common student issues

There are two causes of students struggling. I find it is important to diagnose student struggles and then decide how much effort and time to provide. A general breakdown I find useful:

1. **Software:** Students struggling to install something, nervous with git, trouble matching the standards of the code base, using ssh, etc.
    * Identify and resolve quickly with the help of the TA. These should not be debugged in the mentor meeting.
2. **Data Science:** A model is difficult to train, the available data is messy, etc.
    * Some struggling is good and useful as a learning mechanism.

A catalog of the ways projects fall apart, and what to do about each, is in [escalation and common failure modes](./escalation.md).

## Lessons Learned / Best Practices

After running way too many of these, here are some random pieces of useful advice:

* Use easy and early wins to build student confidence
* Keep expectations on students high, particularly early on.
* Penalize students for being stuck and not reporting it before the mentor meeting.
* Start the difficult work early in the week
* Be wary of end-of-project stall
* Students sometimes want to spend weeks perfecting something that is already good enough. Stick to deadlines and keep the project moving forward.
* Don't depend entirely on TAs
* Maintain a sense of progress at the code level
* Parallelize work where possible
* Use mock data to reduce dependencies between workflows
* Avoid isolating members from the rest of team on long running milestone
* Communication is key
* Don't get stuck – avoid the "Yes, but" circle
* Figure out student strengths and weaknesses and try to leverage them.
* Carefully estimate required effort based on student competencies
* Some tasks will take much longer -- that is fine, do your best to assign work accordingly.
* Break down tasks into smaller components than you think will be required.
* Be wary of creating an "Us (students/TA/mentors) vs. Them (partner)" dynamic
* Students do not take notes.
* Once again – do not have students work on the same task: **Break tasks up into items small enough to define responsibilities around them.**

## Common questions and Issues:

I want to use some other project management app, can I?

```Sure, for your own planning. But the graded record has to be GitHub issues: tasks with acceptance criteria, and progress as comments on those issues.```

A student wants to do something not in Python?

```Nope. Send them to clinic administration.```

I'm not sure where to take a project next?

```Usually the external mentor will have a good idea. If not, `/clinic-project-review` will propose a menu of candidate tasks — and reach out to clinic staff.```

## Student Issues:

Finally, if a student is non-responsive, unprofessional or otherwise engaging in a manner that needs correcting, please document it and let the clinic director and associate director know.

While we expect the mentor to be able to guide projects and provide feedback on a student's performance, there is a line (roughly around being unprofessional) where this is no longer the mentor's problem. It is not the mentor's responsibility to handle students who are behaving unprofessionally.
