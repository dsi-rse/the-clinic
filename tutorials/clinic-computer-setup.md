---
title: "Computer Setup for Data Science Clinic"
tutorial_choices: true
---

# Computer setup for Data Science Clinic

Complete this checklist in **week one**. Ask your TA about anything that fails; incomplete setup can affect your grade. Clinic staff support the tools listed here.

Choose your **operating system** and **where you will work** to reveal your checklist. Ask your mentor if you are unsure whether your project uses the cluster. You can change either selection below.

{% include tutorial-choices.html %}

<div data-platform-guide hidden markdown="1">

<ol data-tutorial-contents aria-label="Tutorial steps"></ol>

<h2 id="1-install-local-tools">1. Set up your computer</h2>

Install [Visual Studio Code](https://code.visualstudio.com/download), then follow your platform's steps.

<div id="setup-tools-mac" data-platform="mac" hidden markdown="1">

Use your **Terminal** app for commands on your own computer.

On **Mac**, open VS Code's command palette and run **Shell Command: Install 'code' command in PATH**, then restart Terminal. On **Linux**, follow [VS Code's installation instructions](https://code.visualstudio.com/docs/setup/linux) for your distribution. Check that `code --version` works.

<div data-work-location="local" hidden markdown="1">

- **Mac:** Try `git --version` and `make --version`. If either is missing, run `xcode-select --install` to install Apple's command-line tools. Install [Docker Desktop for Mac](https://docs.docker.com/desktop/setup/install/mac-install/) and start it.
- **Linux:** Install [Git](https://git-scm.com/downloads/linux) and Make using your distribution's package manager. Follow [Docker's Linux installation guide](https://docs.docker.com/engine/install/) for your distribution, including its post-installation steps.

</div>

</div>

<div id="setup-tools-windows" data-platform="windows" hidden markdown="1">

<div data-work-location="cluster" hidden markdown="1">

Use **PowerShell** for commands on your own computer. Check that `code --version` works. The SSH guide in step 2 covers installing SSH.

</div>

<div data-work-location="local" hidden markdown="1">

Use **PowerShell** to install Windows tools and **Ubuntu (WSL)** for project commands. These are different shells.

1. [Install WSL and Ubuntu](https://learn.microsoft.com/en-us/windows/wsl/install). In **PowerShell as administrator**, run:

       wsl --install

   Restart when prompted. Open **Ubuntu** from the Start menu and create a Linux username and password.

2. In **PowerShell**, check:

       wsl --list --verbose

   Ubuntu should be listed with version `2`.

3. In **Ubuntu**, check:

       whoami
       pwd

   You should see your Linux username (not `root`) and a path such as `/home/YOUR_LINUX_USERNAME`. If this fails, see [WSL troubleshooting](./troubleshooting.md#troubleshooting-wsl).

4. Install Git and Make in **Ubuntu**:

       sudo apt-get update
       sudo apt-get install git build-essential

5. Install [Docker Desktop for Windows](https://docs.docker.com/desktop/setup/install/windows-install/), start it, and enable Ubuntu under **Settings → Resources → WSL Integration**. See [Docker's WSL guide](https://docs.docker.com/desktop/features/wsl/).

6. In VS Code, install the **WSL** extension. Keep project repositories in Ubuntu's home directory, rather than under `/mnt/c`.

</div>

</div>

<div data-work-location="local" hidden markdown="1">

**Check:** In Mac/Linux Terminal or Ubuntu, run:

    /bin/bash --version
    git --version
    make --version
    docker run --rm hello-world

The first three commands should print version information. Docker should print a success message.

</div>

In VS Code, confirm you can open, edit, and save a file.

<h2 id="2-set-up-github-and-ssh">2. Set up GitHub and SSH</h2>

Create a [GitHub account](https://github.com/signup) if you need one. Follow the [SSH setup guide](./ssh_github_cluster.md), choosing the same operating system and work location.

<div data-work-location="local" hidden markdown="1">

Create or reuse a key on your local computer and add its public key to GitHub.

**Check:** The GitHub check in your local terminal should greet you with your GitHub username.

</div>

<div data-work-location="cluster" hidden markdown="1">

Set up both connections: **your computer → cluster**, then **cluster → GitHub**. The guide tells you where to create each key and run each command.

**Check:** Log in to the cluster with your local key, then run the GitHub check on the cluster using your cluster key.

</div>

<h2 id="3-clone-your-project">3. Open your project</h2>

Ask your mentor or TA for the repository URL and access. Copy its **SSH** URL from GitHub's **Code** button.

<div data-work-location="cluster" hidden markdown="1">

<h3 id="6-connect-to-the-cluster-if-your-project-uses-it">Connect to the cluster</h3>

Your project needs a cluster account and permission to use compute nodes. Ask your TA if access has not been arranged. Complete the cluster steps in the [SSH guide](./ssh_github_cluster.md), including its authentication checks.

In **Mac/Linux Terminal** or **Windows PowerShell** on your own computer, connect using the alias from that guide:

    ssh fe.ds

The load balancer chooses a login node, so a prompt such as `CNET@fe01:~$` can change between connections. Your home directory is shared; `tmux` and `screen` sessions stay on the node where they started.

Use login nodes for light file editing, transfers, and submitting or monitoring jobs. Run computation, code agents, and remote IDE backends on compute nodes. Consult the [current login node policy](https://cluster-policy.ds.uchicago.edu/using-the-cluster/login-nodes/) for resource limits.

**Check compute access:** From the login node, request a short CPU-only session:

    srun --partition=general --qos=interactive --time=00:15:00 --cpus-per-task=1 --mem=2G --pty /bin/bash

Once resources are allocated, run `hostname` to confirm you are on a compute node, then check `git --version`. Keep this compute session open for the project setup below.

</div>

<div data-work-location="local" hidden markdown="1">

Run these commands in **Mac/Linux Terminal** or **Ubuntu** on your own computer:

</div>

<div data-work-location="cluster" hidden markdown="1">

Run these commands **on your allocated compute node**:

</div>

    git clone YOUR_REPOSITORY_SSH_URL
    cd YOUR_REPOSITORY_NAME

Follow the repository's README to configure its environment.

<div data-work-location="local" hidden markdown="1">

Open the project in VS Code:

    code .

If it uses a devcontainer, install VS Code's **Dev Containers** extension and choose **Dev Containers: Reopen in Container**.

**Check:** Confirm the project's environment starts.

</div>

<div data-work-location="cluster" hidden markdown="1">

For VS Code, use its **Remote - SSH** extension to connect to your allocated compute node, with the SSH configuration from the guide. Ask your TA for your team's connection workflow. Run `exit` to release this test session when finished.

For project work, request the resources and time your team needs using the [interactive session](https://cluster-policy.ds.uchicago.edu/using-the-cluster/interactive-sessions/) or [batch job](https://cluster-policy.ds.uchicago.edu/using-the-cluster/batch-jobs/) instructions. For account or partition errors, see [cluster troubleshooting](./troubleshooting.md#cluster) or ask your TA.

Use your team's documented data location on the cluster. If data must be transferred from Box, ask your mentor for the project's transfer procedure. Keep data out of Git.

</div>

Before week two, create a branch, make a small appropriate change, commit it, push it, and open a pull request. Ask your TA for help or use the [Git branching tutorial](https://learngitbranching.js.org/?locale=en_US).

<h2 id="4-set-up-claude-code">4. Set up Claude Code</h2>

[Activate your University Claude Enterprise account](https://intranet.uchicago.edu/tools-and-resources/tools-and-applications/claude/getting-started-with-claude).

<div data-work-location="local" hidden markdown="1">

[Install Claude Code](https://claude.com/product/claude-code) on your own computer.

**Check:** Start a session in the desktop app or local project terminal.

</div>

<div data-work-location="cluster" hidden markdown="1">

Use your team's cluster environment to [install Claude Code](https://claude.com/product/claude-code) and start a session in your project directory **on an allocated compute node**. Ask your TA if the repository does not document agent setup.

**Check:** Confirm with `hostname` that you are on a compute node before starting the agent.

</div>

<div data-work-location="local" hidden markdown="1">

<h2 id="5-connect-box-if-your-project-uses-it">5. Connect Box, if your project uses it</h2>

Your mentor or TA will tell you which folder to use.

<div id="setup-box-mac" data-platform="mac" hidden markdown="1">

**Mac:** Install [Box Drive](https://www.box.com/resources/downloads) and sign in with your CNetID. In **Terminal**, set the path for the checks below:

    BOX_DIR="$HOME/Library/CloudStorage/Box-Box"

**Linux:** Ask your mentor for your project's Box download or mount procedure. Set `BOX_DIR` to the resulting local data folder before running the checks below.

</div>

<div id="setup-box-windows" data-platform="windows" hidden markdown="1">

Install [Box Drive for Windows](https://www.box.com/resources/downloads) and sign in with your CNetID. Follow [Box on Windows (WSL)](./box-wsl.md) to mount it at `/mnt/Box`. In **Ubuntu**, set:

    BOX_DIR=/mnt/Box

</div>

**Check:** In the [Box web app](https://uchicago.account.box.com/login), create `clinic-test.txt` in your top-level folder containing `hello`. Make it available locally using your platform's procedure, then run in **Mac/Linux Terminal** or **Ubuntu**:

    ls "$BOX_DIR"
    cat "$BOX_DIR/clinic-test.txt"
    docker run --rm -v "$BOX_DIR:/data" alpine cat /data/clinic-test.txt
    echo "hello again" > "$BOX_DIR/clinic-test-2.txt"

Both `cat` commands should print `hello`. If your setup syncs files, confirm `clinic-test-2.txt` appears in the Box web app. Delete both test files afterward. Checking a real file matters because Box Drive downloads contents on demand.

Set your project's `DATA_DIR` in its local `.env` file to the folder your mentor specifies. Keep data out of Git; see [large file storage](./large_file_storage.md).

</div>

</div>
