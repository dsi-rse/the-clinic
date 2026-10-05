---
title: "Computer Setup for Data Science Clinic"
---

# Computer set up for Data Science Clinic

## Intro

This document contains information on how to prepare you computer for the data science clinic. Note that if you do not have these set up properly your grade may be penalized.

**This is the required technical onboarding for the first week of the quarter.** Work through it during week one and escalate anything that does not work to your TA — do not let a broken setup carry into week two. You cannot push code if your environment does not work, and a week with no pushed code is a 0.

Importantly there may be alternatives to the software listed below that has similar functionality. In the case of you using an alternative you will not receive support from the clinic staff/TAs/etc. We _strongly_ recommend you use the options below.

## 1. Unix Command Line Terminal

You need to have access to a command line terminal for many of the tools that are used. If you have a Mac you can find the command line / terminal using the `terminal` application. 

On Windows machines you will need to install _Windows Subsystem for Linux_ ("WSL") and Ubuntu. To do this, follow the instructions [here](https://learn.microsoft.com/en-us/windows/wsl/install). **Importantly** windows has a terminal called PowerShell which _is not_ the same as a unix terminal. If you aren't sure which one you are running, the windows version's prompt will generally looks something like `C:\`.

**Verification:** Make sure that you can open your terminal app and type in the following without getting an error:

    /bin/bash --version

**Additional Windows Verification:** Make sure that you can complete the above _and_ open PowerShell in your terminal app and run:

    wsl printf 'Default shell: $0\nUsername: $USER\nHome Directory: $(cd ~ && pwd)'

This should generate a return of:

    Default shell: /bin/bash
    Username: YOUR_WSL_USERNAME
    Home Directory: /home/YOUR_WSL_USERNAME

Where `YOUR_WSL_USERNAME` is the username you picked when setting up WSL. It <b>should not be `root`</b> If one of these is incorrect, please go to [troubleshooting instructions](./troubleshooting.md#troubleshooting-wsl)

Additionally, open File Explorer, scroll to the bottom left, select 'Linux', 'Ubuntu', 'home', then right click on your username and select 'Pin to Quick Access'. Now your ubuntu home directory should appear in the top/middle left of file explorer.


## 2. Visual Studio Code

Our default IDE is Visual Studio Code. For both PC and Macs you need to follow the link [here](https://code.visualstudio.com/download). 

**Verification:** Make sure that you can open Visual Studio Code and can open and save a file.

## 3. Terminal based git

We expect students to have access to command line / terminal versions of git. While there are visual ways to access git (such as TortoiseGit, etc.) we expect git to be available on the command line when debugging issues. 

More information on git can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Note that git (probably) will not need to be installed as it is frequently installed as part of another package.

**Verification:** Make sure that you can open your terminal app and type in the following without getting an error:

    git --version

## 4. Docker

On Mac you should install [docker desktop](https://docs.docker.com/desktop/) which is relatively straightforward to install. 

On Windows you will need to follow the instructions [here](https://docs.docker.com/desktop/windows/wsl/) for how to install docker on WSL.

**Verification:** Open up your terminal and type in the following command. If it returns without an error then Docker is installed.

    docker --version


## 5. Make

Many projects use [make](https://www.gnu.org/software/make/manual/make.html) as a way to simplify project development. 

On both Mac and WSL systems with Ubuntu make (should) be installed by default. To verify _check the instructions at the end of this section_.

If not present on WSL/Ubuntu systems you will need to install the `build-essentials` package, which can be done by typing the following at the command prompt or using the Ubuntu installer:

    sudo apt-get install build-essential

On Mac systems, make will also generally be installed, but if it is not then type

    xcode-select --install

to start an installation of XCode Command Line Tools.

**Verification:** Open your terminal and type in the following command. If it returns without an error than make is installed:

    make --version

## 6. SSH Keys

We will use SSH keys to authenticate to github and (if applicable) the DSI Cluster. Please see [these instructions](./ssh_github_cluster.md). 

**Verification:** Open your terminal and type the following command:

    ssh -T git@github.com

If this returns your username and something to the effect of `You've Successfully Authenticated` then it has worked. 

## 7. Python Interpreter

An interpreter is the program that runs Python code; an environment is an interpreter plus a set of installed packages. VS Code calls choosing an environment "selecting an interpreter." You need one for:
1. Running Python scripts.
2. Executing Jupyter notebooks.
3. Editor features in VS Code, such as autocomplete, go to definition, and highlighting errors and linting issues. VS Code can only check your code against the packages in the environment you select.

### How to run Python scripts
Python scripts should always be run inside of the Docker container, using a command like: `docker compose run --rm {project name} uv run my_python_script.py`, where `{project name}` is the service name in your `docker-compose.yaml`. If your terminal is already inside the container, `uv run my_python_script.py` is enough.

### How to select an interpreter for Jupyter notebooks and editor features
There are two ways to select an appropriate interpreter for notebooks and editor features.

**First method: Virtual environment with uv, outside of Docker.** Follow these steps:
1. Install uv, following the instructions [here](https://docs.astral.sh/uv/getting-started/installation/).
2. In a terminal inside your project directory (not in the Docker container), run `uv sync --python 3.12`. This creates a virtual environment in `.venv`, downloading Python 3.12 if needed.
3. Select the interpreter for editor features: open the Command Palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Windows), select `Python: Select Interpreter`, and choose the interpreter with a name like `{project name} (3.12.*) ./.venv/bin/python`.
4. Select the interpreter for a Jupyter notebook in VS Code: If you do not have an interpreter selected, there will be a `Select Kernel` option in the top-right of your notebook. Click it, click `Python Environments...` and select the interpreter with a name like `{project name} (3.12.*) ./.venv/bin/python`.

**Second method: Attach VS Code to a running Docker container.** Follow these steps (requires the Dev Containers extension):
1. In a terminal inside your project directory, run `make run-interactive`. This will start an interactive session inside the Docker container. Leave this terminal open: when you exit it, the container is deleted and VS Code disconnects.
2. Click the `><` symbol in the bottom-left of your VS Code window and select `Attach to Running Container`. If a warning message appears, select `Got it`.
3. Select the container: There should be only one container to select in the dropdown. If there are multiple, select the one that contains the name of your project. This will open a new VS Code window with `>< Container {project name}` in the bottom left corner.
4. The first time you do this for this project, a project folder will not be selected. Click the file explorer icon in the top left, click **Open Folder**, delete the default (probably `/root/`) and type `/project/` and hit enter.
5. Also the first time, install the Python and Jupyter extensions in the container: open the Extensions view, find them under `Local - Installed` (they will show as disabled), and install each one in the container.
6. Select the interpreter for editor features: open the Command Palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Windows), select `Python: Select Interpreter`, and choose the interpreter with a name like `Python 3.12.* /opt/venv/bin/python` (not `./.venv/bin/python`).
7. Select the interpreter for a Jupyter notebook in VS Code: If you do not have an interpreter selected, there will be a `Select Kernel` option in the top-right of your notebook. Click it, click `Python Environments...` and select the interpreter with a name like `Python 3.12.* /opt/venv/bin/python` (not `./.venv/bin/python`).

## 8. Claude Code

The University is providing access to Claude Enterprise accounts. Please [see these instructions for activating your account](https://intranet.uchicago.edu/tools-and-resources/tools-and-applications/claude/getting-started-with-claude) if you need. Then install Claude Code [using these instructions](https://claude.com/product/claude-code) either as a desktop application or as CLI.

**Verification:** Start a Claude Code session either in the desktop app or in a terminal. 

## 9. Box

We use Box for large file storage on many projects. Data that is too large to commit lives in a shared Box folder, and your project reads it through a `DATA_DIR` path set in the project's `.env` file rather than keeping the data in the repository. You can use your CNET to access your [university account here](https://uchicago.account.box.com/login).

You need **Box Drive**, not just the website, so that your code -- and the Docker container it runs in -- can open Box files like ordinary files. Download it [here](https://www.box.com/resources/downloads) and sign in with your CNET.

On Mac, Box Drive syncs to `~/Library/CloudStorage/Box-Box/` and requires no further setup.

On Windows, Box Drive is a Windows application and the folder it creates cannot be read from WSL without additional configuration. Please see [these instructions](./box-wsl.md).

**Verification:** First, in the [Box web app](https://uchicago.account.box.com), create a markdown file named `clinic-test.md` in your top-level folder containing the word `hello`. Then open your terminal and confirm you can list your Box folder, read that file, and read it from inside Docker. On Mac:

    ls ~/Library/CloudStorage/Box-Box/
    cat ~/Library/CloudStorage/Box-Box/clinic-test.md
    docker run --rm -v ~/Library/CloudStorage/Box-Box:/data alpine cat /data/clinic-test.md

Each `cat` should print `hello`. On Windows, run the same three commands against `/mnt/Box` instead. Creating the file in the web app matters because Box only downloads files on demand, so a successful `ls` does not prove the file itself is available.

Finally, confirm that writes sync back up. Create a file from the terminal and check that it appears in the Box web app:

    echo "hello again" > ~/Library/CloudStorage/Box-Box/clinic-test-2.md

On Windows, use `/mnt/Box/clinic-test-2.md` instead. Once everything works, you can delete both test files.

## 10. DSI Cluster

If you need to access the cluster then you will need to request an account (which should have already been done for you). You will then need to set up SSH keys and verify that you can SSH into the machine. Note that the step-by-step instructions for how to do this are included in the [same SSH Keys docs as in section 6](./ssh_github_cluster.md). 

Note that as part of these instructions you will add your SSH key to github. This is a required part of this process.

The cluster now uses `login.ds.uchicago.edu` to route each connection to the least-loaded login node. Direct SSH to individual login nodes is retired. If you already have a `Host fe.ds` entry in your local `~/.ssh/config`, change its `HostName` to `login.ds.uchicago.edu`. You can keep the `fe.ds` nickname. See the [login node policy](https://cluster-policy.ds.uchicago.edu/using-the-cluster/login-nodes/).

**Verification:** Open your terminal and type in the following command:

    ssh fe.ds

If you have set this up correctly you should be connected to the AI cluster and see something like `CNET@fe01:~$`. The node name can change between connections; this is expected. After this, verify you set up ssh keys correctly:

    ssh-add -l
    ssh -T git@github.com

These commands should return something like `256 SHA256:sdlfjkwljflsdfkjs;flkjs;lfj user@host (ED25519)` and `Hi USERNAME! You've successfully authenticated ...`

Login nodes are limited to 1 CPU and 8 GB RAM per user, and 12 hours per process. Use compute nodes for computation, code agents, and remote IDE backends through [interactive sessions](https://cluster-policy.ds.uchicago.edu/using-the-cluster/interactive-sessions/) or [batch jobs](https://cluster-policy.ds.uchicago.edu/using-the-cluster/batch-jobs/).

After this, to verify that you have access to the cluster, type in the following at that prompt:

    srun -p general --pty /bin/bash

If the above command works then you should see something like `CNET@g007:~$` as the prompt. NOTE: you may get the error `srun: error: Lookup failed: Unknown host`, but you can ignore it. If you are NOT properly set up you will see `srun: error: Unable to allocate resources: Invalid account or account/partition combination specified`.

_Make sure to type in `exit` when you are done!_

## 11. GitHub Repository Cloned

You should have your GitHub repository cloned to the correct location(s).

**Verification:** Open your GitHub repository in VS Code. 
- If your project uses a devcontainer for Docker, it should be in the devcontainer extension. 
- If you use Windows, your project should be located in the WSL filesystem.
- If you are using the cluster, your repository should be cloned on the cluster.

## 9. Box

Some projects store data or partner documents in [UChicago Box](https://uchicago.app.box.com/). Log in with your CNetID and confirm you can reach any Box folder your project uses. Your mentor or TA will tell you whether your project uses Box and which folder.

Note that data from Box does not belong in the git repository. Follow the [large file storage](./large_file_storage.md) guidance instead.

**Verification:** Log into Box with your CNetID in a browser and open your project's folder.

## 12. Git and GitHub Workflow

Clinic work is submitted as pull requests, so you need to be comfortable with the basic branch-commit-push-PR loop before week two.

**Verification:** In your project repository, check out a new branch, make a trivial commit, push the branch, and open a pull request. If any step of that is unfamiliar, work through [this Git branching tutorial](https://learngitbranching.js.org/?locale=en_US) and ask your TA. 
