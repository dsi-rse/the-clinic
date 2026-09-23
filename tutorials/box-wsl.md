---
title: "Box on Windows (WSL)"
---

# Setting Up Box on Windows (WSL)

## Background

This document contains instructions for making your Box folder usable from WSL. Mac users do not need it -- Box Drive syncs to `~/Library/CloudStorage/Box-Box/` and works out of the box.

Windows needs extra work for two reasons:

1. **There is no Linux version of Box Drive.** You install the Windows application, which syncs your files to the Windows side of your machine.
2. **The folder it creates cannot be read through the usual `/mnt/c/...` path.** Box Drive creates `Box` as a Windows reparse point rather than a normal folder, and WSL cannot follow it.

The second point is the one that causes confusion, because the failure looks like a broken disk rather than a configuration problem:

    $ ls /mnt/c/Users/YOUR_WINDOWS_USERNAME/Box
    ls: cannot access '/mnt/c/Users/YOUR_WINDOWS_USERNAME/Box': Input/output error

Docker fails the same way, which means a `DATA_DIR` pointed at `/mnt/c/...` will never work:

    docker: Error response from daemon: stating /mnt/c/Users/YOUR_WINDOWS_USERNAME/Box: input/output error

The fix is to mount the Box folder directly at its own mount point, which bypasses the reparse point entirely.

## 1. Install Box Drive for Windows

Download [Box Drive](https://www.box.com/resources/downloads) and install the **Windows** version. Do not try to install Box inside Ubuntu. Sign in with your CNET.

Box Drive will sync your files to:

    C:\Users\YOUR_WINDOWS_USERNAME\Box

`YOUR_WINDOWS_USERNAME` is your **Windows** username, which is frequently *not* the same as the username you chose when setting up WSL. If you are not sure what it is, open your terminal and run:

    ls /mnt/c/Users/

Your Windows username will be one of the entries listed.

## 2. Test the mount

Before making anything permanent, confirm that mounting works. In your WSL terminal, substituting your Windows username:

    sudo mkdir -p /mnt/Box
    sudo mount -t drvfs 'C:\Users\YOUR_WINDOWS_USERNAME\Box' /mnt/Box
    ls /mnt/Box

If this lists your Box folders, continue to the next step. If it does not, see [troubleshooting](#troubleshooting) below.

## 3. Make the mount permanent

The mount from step 2 disappears when WSL restarts. To make it persist:

1. Make sure `/etc/wsl.conf` contains the following. You will need to edit it with `sudo`, for example `sudo nano /etc/wsl.conf`:

        [boot]
        systemd=true

        [automount]
        enabled = true
        mountFsTab = true

2. Add this line to `/etc/fstab`, again substituting your Windows username:

        C:\Users\YOUR_WINDOWS_USERNAME\Box /mnt/Box drvfs defaults,nofail,x-systemd.automount 0 0

3. Shut WSL down completely from PowerShell, then reopen your terminal so the new settings take effect:

        wsl --shutdown

## 4. Verification

Open your terminal and confirm all four of the following work.

**List your Box folder:**

    ls /mnt/Box

**Read the contents of a real file.** This step matters: Box only downloads files on demand, so a successful `ls` does not prove the file itself is actually available. In the [Box web app](https://uchicago.account.box.com/login), create a text file named `clinic-test.txt` in your top-level folder containing the word `hello`, then read it from the terminal:

    cat /mnt/Box/clinic-test.txt

This should print `hello` rather than an error.

**Confirm Docker can read it**, since this is how your project will actually reach the data:

    docker run --rm -v /mnt/Box:/data alpine cat /data/clinic-test.txt

**Confirm writes sync back up.** Create a file from the terminal, then check that it appears in the [Box web app](https://uchicago.account.box.com/login):

    echo "hello again" > /mnt/Box/clinic-test-2.txt

Once all four work, you can delete both test files.

## 5. Set your `DATA_DIR`

Projects generated from the clinic template read their data through a `DATA_DIR` variable in the project's `.env` file. Point it at your project's folder under `/mnt/Box`:

    DATA_DIR=/mnt/Box/dsi-core/11th-hour/your-project

Your mentor will tell you the exact folder for your project. Note that teammates on Mac will have a different path in their own `.env`; this is expected, since `.env` is deliberately not committed to the repository.

## Troubleshooting

#### Error: `Input/output error` when listing `/mnt/Box`

Box Drive is probably not running. Check for the Box icon in the Windows system tray and confirm you are signed in, then try `ls /mnt/Box` again.

#### Error: `mount: /mnt/Box: wrong fs type, bad option, bad superblock...`

The path you gave to `mount` does not exist on the Windows side. Double-check your Windows username with `ls /mnt/c/Users/`, and confirm the `Box` folder appears in File Explorer under `C:\Users\YOUR_WINDOWS_USERNAME`.

#### `/mnt/Box` is empty after restarting

Your `/etc/fstab` line is not being applied. Confirm that `/etc/wsl.conf` has `mountFsTab = true` under `[automount]`, then run `wsl --shutdown` from PowerShell and reopen your terminal. Note that closing the terminal window is not sufficient -- you must run `wsl --shutdown`.

#### Docker cannot mount `/mnt/Box`

Confirm Docker Desktop is running with WSL integration enabled for your Ubuntu distribution. See the [Docker WSL instructions](https://docs.docker.com/desktop/windows/wsl/).

#### Everything is extremely slow

Reading large files across the Windows/WSL boundary is slower than reading from the WSL filesystem. This is expected. If a project involves repeatedly reading the same large files, ask your mentor whether it makes sense to copy them into WSL for the duration of the work.
