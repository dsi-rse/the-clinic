In your browser on your own computer, open [GitHub's SSH keys settings](https://github.com/settings/keys). Select **New SSH key**, choose **Authentication Key**, title it “{{ include.title }}”, and paste the **{{ include.location }} public key** you printed above.

In your **{{ include.location }} terminal**, test:

    ssh -T git@github.com

Enter that key's passphrase if asked. On first connection, compare the fingerprint with [GitHub's published fingerprints](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints) before accepting it. Expect a greeting containing your GitHub username and “successfully authenticated”; exit code `1` is normal because GitHub does not provide shell access.
