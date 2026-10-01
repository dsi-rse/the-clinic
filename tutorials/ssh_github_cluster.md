---
title: "SSH for GitHub and the DSI Cluster"
tutorial_choices: true
---

# SSH for GitHub and the DSI cluster

SSH keys let you authenticate without entering your account password each time. Your **public key** ends in `.pub` and can be shared. Your **private key** has no `.pub` suffix; keep it on the machine where you create it.

Choose your **operating system** and **work location**, matching your choices in the computer setup checklist, to reveal the steps you need.

{% include tutorial-choices.html %}

<div data-platform-guide hidden markdown="1">

<ol data-tutorial-contents aria-label="Tutorial steps"></ol>

<div data-work-location="local" hidden markdown="1">

You will create a key on your computer and add its public key to GitHub.

Already set up? Run `ssh -T git@github.com` in your local project terminal. If it greets you with your GitHub username, you can return to the [computer setup checklist](./clinic-computer-setup.md#3-clone-your-project).

</div>

<div data-work-location="cluster" hidden markdown="1">

You need **two separate keys**, one for each connection:

| Connection | Create the key on | Add the public key to |
| --- | --- | --- |
| Your computer → DSI cluster | Your local computer | Your cluster account |
| DSI cluster → GitHub | The cluster | Your GitHub account |

Your local private key stays on your computer; your cluster private key stays on the cluster. Your cluster home directory is shared across login and compute nodes, so you create the cluster key only once.

Your mentor or TA must arrange a cluster account and access to compute nodes. You need your **CNetID** for these steps.

</div>

<h2 id="1-prepare-your-key">1. Local computer: prepare your key</h2>

**Run these commands on your own computer.** These examples use `id_ed25519`. If you already have a working key, use its name and path throughout the local-computer steps. **Do not overwrite an existing key.**

<div id="ssh-key-mac" data-platform="mac" hidden markdown="1">

In **Terminal**, check for existing keys:

    mkdir -p ~/.ssh
    ls ~/.ssh

</div>

<div id="ssh-key-windows" data-platform="windows" hidden markdown="1">

In **PowerShell**, check that `ssh -V` works. If it is missing, install the [Windows OpenSSH Client](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse). Check your existing keys:

    Get-ChildItem "$env:USERPROFILE\.ssh"

If that directory does not exist, continue with key creation below.

</div>

If you need a new key, run in the **same local terminal**:

    ssh-keygen -t ed25519 -C "YOUR_EMAIL"

Accept the default filename and choose a passphrase.

<div data-platform="mac" hidden markdown="1">

Load the key into your agent:

    ssh-add ~/.ssh/id_ed25519

If this reports that it cannot connect to an authentication agent, start one with `eval "$(ssh-agent -s)"`, then repeat `ssh-add`.

Print your **local public key**:

    cat ~/.ssh/id_ed25519.pub

</div>

<div data-platform="windows" hidden markdown="1">

In **PowerShell as administrator**, enable the key agent:

    Set-Service -Name ssh-agent -StartupType Automatic
    Start-Service ssh-agent

Return to **ordinary PowerShell** to load your key and print your **local public key**:

    ssh-add "$env:USERPROFILE\.ssh\id_ed25519"
    Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub"

<div data-work-location="local" hidden markdown="1">

**Ubuntu (WSL):** PowerShell and Ubuntu have separate SSH settings. To use the same key for Git in Ubuntu, copy the key pair from Windows. Replace `YOUR_WINDOWS_USERNAME` with your Windows account name, which may differ from your Linux username. If Ubuntu already has a working key, keep it and add its public key to GitHub too.

    mkdir -p ~/.ssh
    cp -i /mnt/c/Users/YOUR_WINDOWS_USERNAME/.ssh/id_ed25519 ~/.ssh/
    cp -i /mnt/c/Users/YOUR_WINDOWS_USERNAME/.ssh/id_ed25519.pub ~/.ssh/
    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/id_ed25519
    chmod 644 ~/.ssh/id_ed25519.pub
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519

</div>

</div>

**Check:** Run `ssh-add -l` in your local terminal. It should list your key. If the agent has no identities in a later session, load your key with `ssh-add` again. See [GitHub's key and agent guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for details.

<div data-work-location="local" hidden markdown="1">

<h2 id="2-add-the-public-key-to-github">2. Local computer: connect to GitHub</h2>

{% include github-ssh.md location="local" title="clinic laptop" %}

<div data-platform="windows" hidden markdown="1">

Run this check in **Ubuntu** too, since that is where you will use Git.

</div>

Return to the [computer setup checklist](./clinic-computer-setup.md#3-clone-your-project).

</div>

<div data-work-location="cluster" hidden markdown="1">

<h2 id="3-configure-cluster-access-if-needed">2. Local computer: authorize cluster access</h2>

**Stay on your local computer.** In your local terminal, open your **local** SSH config in VS Code:

    code "$HOME/.ssh/config"

Create the file if it does not exist. Update existing cluster entries, or add these before any `Host *` block. Replace `YOUR_CNET` and, if needed, the local key filename:

```
Host fe.ds
  HostName login.ds.uchicago.edu
  IdentityFile ~/.ssh/id_ed25519
  ForwardAgent no
  User YOUR_CNET

Host *.ds !fe.ds
  HostName %h.uchicago.edu
  IdentityFile ~/.ssh/id_ed25519
  ForwardAgent no
  User YOUR_CNET
  ProxyJump fe.ds
```

`fe.ds` is your nickname for the login load balancer. The second block lets you reach an allocated compute node through it, using a name such as `g007.ds`. This setup uses the cluster's own key for GitHub.

**Existing users:** Change a retired `fe01.ds.uchicago.edu`, `fe02.ds.uchicago.edu`, or `fe03.ds.uchicago.edu` hostname to the `HostName` shown above, and change `ForwardAgent yes` to `ForwardAgent no` in these entries. Keep your existing key path and username. See the [current login node policy](https://cluster-policy.ds.uchicago.edu/using-the-cluster/login-nodes/).

From your **local terminal**, send your **local public key** to the cluster. This command asks for your cluster account password and adds the key to the cluster's `authorized_keys` file.

<div id="ssh-authorize-mac" data-platform="mac" hidden markdown="1">

    cat ~/.ssh/id_ed25519.pub | ssh fe.ds 'umask 077; mkdir -p ~/.ssh; chmod 700 ~/.ssh; cat >> ~/.ssh/authorized_keys; chmod 600 ~/.ssh/authorized_keys'

</div>

<div id="ssh-authorize-windows" data-platform="windows" hidden markdown="1">

    Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub" | ssh fe.ds "umask 077; mkdir -p ~/.ssh; chmod 700 ~/.ssh; cat >> ~/.ssh/authorized_keys; chmod 600 ~/.ssh/authorized_keys"

</div>

<h2 id="4-verify-cluster-access">3. Local computer: log in to the cluster</h2>

In your **local terminal**, run:

    ssh fe.ds

You should connect without entering your cluster account password; your key passphrase may still be requested. Run `hostname` to confirm you are on the cluster. The prompt may show `fe01`, `fe02`, or `fe03`, and the node can change between connections.

**Keep this SSH session open. The remaining commands run on the cluster.** If the connection fails, see [cluster troubleshooting](./troubleshooting.md#troubleshooting-cluster) or ask your TA.

<h2 id="create-cluster-github-key">4. Cluster: create your GitHub key</h2>

**Run these commands in the cluster terminal you just opened.** Check for existing keys:

    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
    ls ~/.ssh

If you already have a cluster key that authenticates to GitHub, reuse it and substitute its filename below. Otherwise, create a **new key on the cluster**:

    ssh-keygen -t ed25519 -C "YOUR_GITHUB_EMAIL" -f ~/.ssh/id_ed25519_github

Choose a passphrase. If that filename already exists, stop and check it rather than overwriting it. These files stay in your cluster home directory.

Print your **cluster public key**:

    cat ~/.ssh/id_ed25519_github.pub

<h2 id="connect-cluster-to-github">5. Cluster: connect to GitHub</h2>

Back in the **cluster terminal**, open the cluster's `~/.ssh/config` in a text editor. For example, run `nano ~/.ssh/config`; use **Ctrl+O**, then **Enter** to save, and **Ctrl+X** to exit. Add or update this entry before any `Host *` block:

```
Host github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  IdentitiesOnly yes
```

{% include github-ssh.md location="cluster" title="DSI cluster" %}

**Both connections are ready:** you can log in from your computer to the cluster, and Git running on the cluster can authenticate to GitHub. Run `exit` to return to your local computer.

Continue with the [checklist's compute access check](./clinic-computer-setup.md#6-connect-to-the-cluster-if-your-project-uses-it).

</div>

</div>
