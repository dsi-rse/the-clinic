# Information for Current Students
## Table of Contents
<!-- do not change TOC, generated from script -->
<!-- `npx markdown-toc -i students/index.md` --> 

<!-- toc -->

- [Syllabus](#syllabus)
- [Weekly Calendar](#weekly-calendar)
- [Your Weekly Responsibilities](#your-weekly-responsibilities)
- [Logistics](#logistics)
  * [Meeting times / Simultaneous Enrollment](#meeting-times--simultaneous-enrollment)
  * [In-person requirements](#in-person-requirements)
- [People](#people)
- [Documents](#documents)
  * [Weekly Tasks and Weekly Report](#weekly-tasks-and-weekly-report)
  * [First Week Org Report](#first-week-org-report)
  * [Meeting with External Mentors](#meeting-with-external-mentors)
  * [Mid-quarter presentation](#mid-quarter-presentation)
  * [Peer Review](#peer-review)
- [Technical Work Requirements](#technical-work-requirements)
- [Finals Week Deliverables](#finals-week-deliverables)
- [Coding Standards](#coding-standards)
- [Additional Tutorials and Assistance](#additional-tutorials-and-assistance)

<!-- tocstop -->

## Syllabus
The Syllabus, including all course expectations can be found [here](../syllabus/syllabus.md).

## Weekly Calendar
You can find a weekly calendar [here](../syllabus/weekly-plan.md). 

## Your Weekly Responsibilities

Almost everything you owe the clinic each week happens in **GitHub** and your project's **Slack channel**. The cycle runs from one mentor session to the next.

**During the first week**, complete the required [technical onboarding](../tutorials/clinic-computer-setup.md) and escalate any problems to your TA. Do not let a broken setup carry into week two.

**After each mentor session** (by midnight that day):

* Open a GitHub issue, or issues, describing your tasks for the coming week with clear acceptance criteria.
* Post links to those issue(s) in the weekly Slack thread.

**Throughout the week:**

* Attend both TA sessions and make steady progress toward completing your tasks.
* Respond to the code reviews your TA leaves on your pull requests.

**By midnight before your mentor session:**

* Submit your work on GitHub. If the task involved code, it must be committed and pushed in a pull request. If it did not, your findings go in a comment on the issue.
* Describe your progress on last week's issues as a comment on each issue, linking any related pull request.
* Post links to those issue comments in the weekly Slack thread.
* Prepare a short update on last week's work.

**At the mentor session:**

* Present your update to the team. Slides are recommended and you should expect to share your screen. Keep it short — your mentor may use a timer.
* Make sure you understand your assignment for the coming week. If you do not, ask.

Formats and grading for all of this are covered in [Weekly Tasks and Weekly Report](#weekly-tasks-and-weekly-report) below.

## Logistics
### Meeting times / Simultaneous Enrollment

During the first week of the Data Science Clinic students are expected to meet at the time specified in the schedule, commonly TuTh 5-6:20, for orientation and introduction activities. 

During the first week, each project will identify meeting times specific to their project (two TA sessions and one mentor session). These meeting times are dependent on the TA, Mentor(s) and students' schedules. These meeting times will be used for the rest of the quarter.

During the sixth week of the quarter there are a set of mid-quarter presentations. These presentations are not required for all team members -- though failing to support your team is a bad signal. The mid-quarter presentations are in-person and in the room scheduled for the class.

Since outside the times listed above we do not meet during the scheduled time it is not uncommon for students to enroll in a class with some overlap. If you do have a course which has some overlap or conflict with the scheduled time you may need to fill out a "Simultaneous Enrollment" form with your advisor. If this is the case please send an email to the Data Science Clinic director stating that you will be doing this.

### In-person requirements

We expect all TA sessions and mentor meetings (unless the mentor chooses otherwise) to be done _in-person_ during normal business hours. If your schedule makes it difficult to be on the Hyde Park Campus during normal business hours, such as being in a program based downtown or another commitment which takes you off campus for significant time, then we recommend _not_ taking this course.


## People

The Data Science Clinic is administered by [David Uminsky](https://datascience.uchicago.edu/people/david-uminsky/) and Kelly O'Brien (ktobrien@uchicago.edu). Questions about the clinic should be addressed to them either over slack or via their UChicago email address.  


## Documents 

This section contains links to many of the important documents used in the Data Science Clinic. 


### Weekly Tasks and Weekly Report

Your weekly deliverables live in GitHub. There is no document to upload.

**Weekly tasks** are GitHub issues that you open after each mentor session, with clear acceptance criteria for each task. The format and the rules for carrying unfinished tasks over are in the [weekly tasks template](../templates/weekly-tasks.md).

**The weekly report** is a comment you post on those same issues before your next mentor session, marking each piece of acceptance criteria as `complete`, `pending review`, `pending changes`, `in progress`, or `no progress shared`, with a short explanation. The format is in the [weekly report template](../templates/weekly-report.md).

Both are graded together as a single 0-5 score each week by your mentor. The rubric is [here](../rubrics/weekly-report-rubric.md).

Two things worth repeating:

* **A task is not complete until the pull request addressing it is merged to `main`.**
* **If a task required code and you pushed none, you receive a 0 for that week.**

### First Week Org Report

The first week org report can also be found in the `templates` directory in a [MS-WORD format](../templates/week-1-org-report.docx). There is a markdown version [here](../templates/week-1-org-report.md). Grading for this is simple: if it is turned in on time and complete it receives full credit, otherwise zero.

### Meeting with External Mentors

Each time you meet with your external mentors you need to designate someone to be the note-taker. This person will write up the notes during the meeting making sure to include the information in the [mentor meeting template](../templates/mentor-meeting.md).

Mentor meeting notes need to be committed to the repo in either a `docs` or `meetings` directory.

### Mid-quarter presentation

In week 6 of the Data Science Clinic students will be required to complete a short mid-quarter presentation. There is a [template](../templates/midquarter-presentation-template.pptx) for the presentation. 

If you want to receive an "A" on this assignment, _make sure to follow the [rubric](../rubrics/mid-quarter-presentation-rubric.md) precisely_.

### Peer Review

During the quarter you will be asked to complete peer review exercises (due at the end of weeks 3, 6, and 10) where you provide feedback to your team about the level of effort you have observed. There are **no make-up peer reviews**, so please check Canvas for due dates and complete them on time. The [peer review rubric](../rubrics/peer-review.md) explains the grading criteria and the importance of this feedback.

## Technical Work Requirements

Each week, if a task requires code, you must commit and push it to an open pull request. No pushed code means a 0 for the week.

You may write code locally or in a devcontainer, but **your final submissions must work in Docker.**

All code paths must be documented somewhere in the repo and reproducible on a fresh clone:

* If there is a Jupyter notebook, someone who has just cloned the repo should be able to follow the documented setup steps, hit "Run All," and reproduce your results.
* If there is a data pipeline, someone who has just cloned the repo should be able to follow the documented setup steps, run `make run-pipeline` or equivalent, and reproduce your results.

The full expectations are in the [coding standards](../coding-standards/coding-standards.md).

## Finals Week Deliverables

As this is a projects based course most of the work is designed around a set of final deliverables. There are four set of requirements, each with their own rubric that you can find in the table below. These are to be completed during the last week of the quarter and finals week.

| Item | Requirement Information | Submission information and Rubric | 
| --- | --- | --- |
| Code | You are required to turn in the code that you wrote in a well-kept repository and conforms to the [coding standards](../coding-standards/coding-standards.md) of the data science clinic. | For the final code submission you will need to fill out the worksheet [here](../templates/final-technical-submission.md) and submit that worksheet in Canvas. A rubric can be found [here](../rubrics/final-technical-cleanup.md) | 
| One pager | There is a one page project description that needs to be completed as part of the final submission. Note that you will be required to provide both a draft and final version. | Grading rubrics can be found [here](../rubrics/one-pager.md) and a template can be found [here](../templates/one-pager-template.docx). Both versions are to be submitted via Canvas. |
| Final Video | A short, recorded, video presentation is also required to be created. This includes two drafts and a final version. | Grading will be done according to the [rubric](../rubrics/final-video.md) and submission will be completed via Canvas. |
| Partner Email | Each team should designate one person to send a final email to the external partner with the video, one-pager and link to the code they developed. | Information on requirements for this email can be found [here](../rubrics/final-email.md). | 

## Coding Standards
You can find information on Data Science Clinic Coding Standards and expectations [here](../coding-standards/coding-standards.md).


## Additional Tutorials and Assistance
We keep a list of frequently asked questions and answers as well as "How-to"'s for specific technologies in this repo:

* [How to set up your computer](../tutorials/clinic-computer-setup.md)
* [SSH to Github and the Cluster](../tutorials/ssh_github_cluster.md)
* [Using jupyter on the cluster](../tutorials/get-jupyter-working.md)
* [Slurm](../tutorials/slurm.md)
* [Using Submitit on the cluster](../tutorials/submit-it.md)
* [Writing well-documented code](../coding-standards/code-example.md)
* [Docker Common Questions](../tutorials/Docker.md)
* [Understanding File Systems](../tutorials/filepaths.md)
* [Using GDAL](../tutorials/geopandas-dockerfile.md)
* [Using Podman on the Cluster](../tutorials/podman.md)
* [Speaking Code](../tutorials/speaking-code.md)
* [WSL FAQ](../tutorials/WSL.md)
* [Web scraping](../tutorials/web_scraping.md)
* [X11 on the Cluster](../tutorials/X11.md)
* [How to talk about the clinic on your resume and in interviews](../tutorials/resume-interviews.md)
* [Removing Sensitive Data from Git](../tutorials/remove_data_git.md)
* [Large file storage](../tutorials/large_file_storage.md)

Finally, The University of Chicago's Computer Science Department has an in-depth list of related resources that you can find [here](https://uchicago-cs.github.io/student-resource-guide/). 

If you need help using Unix, docker or any of the tools used in the clinic this is an invaluable resource.
