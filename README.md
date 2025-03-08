# SDET_INTERMEDIATE_1


karth@KARTHICK MINGW64 ~
$ pwd
/c/Users/karth

karth@KARTHICK MINGW64 ~
$ mkdir git-project
mkdir: cannot create directory ‘git-project’: File exists

karth@KARTHICK MINGW64 ~
$ mkdir git-demo-project

karth@KARTHICK MINGW64 ~
$ cd git-femo-project
bash: cd: git-femo-project: No such file or directory

karth@KARTHICK MINGW64 ~
$ cd git-demo-project

karth@KARTHICK MINGW64 ~/git-demo-project
$ git init
Initialized empty Git repository in C:/Users/karth/git-demo-project/.git/

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ echo "Initial commit -Main branch"> file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git add file.txt
warning: in the working copy of 'file.txt', LF will be replaced by CRLF the next time Git touches it

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git config --global core.autocr1f false

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git config --global core.autocr1f true

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git config --global core.autocr1f input

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git config --global core.autocr1f
input

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git rm --cached file.txt
rm 'file.txt'

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git add file.txt
warning: in the working copy of 'file.txt', LF will be replaced by CRLF the next time Git touches it

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git commit -m "Fix line ending issue"
[master (root-commit) 7db2b2c] Fix line ending issue
 1 file changed, 1 insertion(+)
 create mode 100644 file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git checkout -b feature-branch
Switched to a new branch 'feature-branch'

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ echo "Feature branch update">> file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git commit -m "updated file.txt in feature branch"
On branch feature-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   file.txt

no changes added to commit (use "git add" and/or "git commit -a")

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git add file.txt
warning: in the working copy of 'file.txt', LF will be replaced by CRLF the next time Git touches it

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git commit -m"updated file.txt in feature branch"
[feature-branch fcdedda] updated file.txt in feature branch
 1 file changed, 1 insertion(+)

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git log --online
fatal: unrecognized argument: --online

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git log --oneline
fcdedda (HEAD -> feature-branch) updated file.txt in feature branch
7db2b2c (master) Fix line ending issue

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git diff <commit1> <commit2>
bash: syntax error near unexpected token `<'

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git diff <commit1> <commit2>
bash: syntax error near unexpected token `<'

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git diff ^C

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ ^C

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ ^C

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git diff fcdedda 7db2b2c
diff --git a/file.txt b/file.txt
index dbebee8..d4373ab 100644
--- a/file.txt
+++ b/file.txt
@@ -1,2 +1 @@
 Initial commit -Main branch
-Feature branch update

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git diff main feature-branch
fatal: ambiguous argument 'main': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git diff master feature-branch
diff --git a/file.txt b/file.txt
index d4373ab..dbebee8 100644
--- a/file.txt
+++ b/file.txt
@@ -1 +1,2 @@
 Initial commit -Main branch
+Feature branch update

karth@KARTHICK MINGW64 ~/git-demo-project (feature-branch)
$ git checkout master
Switched to branch 'master'

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git merge feature-branch
Updating 7db2b2c..fcdedda
Fast-forward
 file.txt | 1 +
 1 file changed, 1 insertion(+)

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ echo "Uncommitted change" >> file.txt


karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git stash
warning: in the working copy of 'file.txt', LF will be replaced by CRLF the next time Git touches it
Saved working directory and index state WIP on master: fcdedda updated file.txt in feature branch

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git stash
No local changes to save

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git stash list
stash@{0}: WIP on master: fcdedda updated file.txt in feature branch

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git stash apply
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   file.txt

no changes added to commit (use "git add" and/or "git commit -a")

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git checkout -b rebase-branch
Switched to a new branch 'rebase-branch'

karth@KARTHICK MINGW64 ~/git-demo-project (rebase-branch)
$ echo "rebase branch change" >> file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (rebase-branch)
$ git add file.txt
warning: in the working copy of 'file.txt', LF will be replaced by CRLF the next time Git touches it

karth@KARTHICK MINGW64 ~/git-demo-project (rebase-branch)
$ git commit -m "Commit on rebase-branch"
[rebase-branch 7076d17] Commit on rebase-branch
 1 file changed, 2 insertions(+)

karth@KARTHICK MINGW64 ~/git-demo-project (rebase-branch)
$ git checkout master
Switched to branch 'master'

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ echo "New change in main" >> file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git add file.txt
warning: in the working copy of 'file.txt', LF will be replaced by CRLF the next time Git touches it

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git commit -m "New commit on Main "
[master 77b41ec] New commit on Main
 1 file changed, 1 insertion(+)

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git checkout rebase-branch
Switched to branch 'rebase-branch'

karth@KARTHICK MINGW64 ~/git-demo-project (rebase-branch)
$ git rebase main
fatal: invalid upstream 'main'

karth@KARTHICK MINGW64 ~/git-demo-project (rebase-branch)
$ ^C

karth@KARTHICK MINGW64 ~/git-demo-project (rebase-branch)
$ git branch
  feature-branch
  master
* rebase-branch

karth@KARTHICK MINGW64 ~/git-demo-project (rebase-branch)
$ git checkout master
Switched to branch 'master'

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git pull origin master
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git remote -v

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git remote add origin https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git remote -v
origin  https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git (fetch)
origin  https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git (push)

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git push -u origin master
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 12 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (9/9), 729 bytes | 729.00 KiB/s, done.
Total 9 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/Karthick252001/SDET_INTERMEDIATE_1/pull/new/master
remote:
To https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git rebase rebase-branch
Auto-merging file.txt
CONFLICT (content): Merge conflict in file.txt
error: could not apply 77b41ec... New commit on Main
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
hint: Disable this message with "git config advice.mergeConflict false"
Could not apply 77b41ec... New commit on Main

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/1)
$ npp file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/1)
$ git diff master feature-branch
diff --git a/file.txt b/file.txt
index 6832b7f..dbebee8 100644
--- a/file.txt
+++ b/file.txt
@@ -1,3 +1,2 @@
 Initial commit -Main branch
 Feature branch update
-New change in main

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/1)
$ git checkout master
error: you need to resolve your current index first
file.txt: needs merge

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/1)
$ git checkout master
error: you need to resolve your current index first
file.txt: needs merge

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/1)
$ git status
interactive rebase in progress; onto 7076d17
Last command done (1 command done):
   pick 77b41ec New commit on Main
No commands remaining.
You are currently rebasing branch 'master' on '7076d17'.
  (fix conflicts and then run "git rebase --continue")
  (use "git rebase --skip" to skip this patch)
  (use "git rebase --abort" to check out the original branch)

Unmerged paths:
  (use "git restore --staged <file>..." to unstage)
  (use "git add <file>..." to mark resolution)
        both modified:   file.txt

no changes added to commit (use "git add" and/or "git commit -a")

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/1)
$ npp file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/1)
$ Initial commit -Master branch
bash: Initial: command not found

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/1)
$ git add file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/1)
$ git rebase --continue
[detached HEAD c54391c] New commit on Main yes
 1 file changed, 2 insertions(+)
Successfully rebased and updated refs/heads/master.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git rebase master
Current branch master is up to date.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git checkout frebase-branch
error: pathspec 'frebase-branch' did not match any file(s) known to git

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git tag -a V1.0 -m "Version 1.0 release"

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git tag
V1.0

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git push origin --tags
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 12 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (7/7), 667 bytes | 667.00 KiB/s, done.
Total 7 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git
 * [new tag]         V1.0 -> V1.0

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git remote add origin https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git
error: remote origin already exists.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git branch
  feature-branch
* master
  rebase-branch

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git push -u origin master
To https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git pull --revbase origin master
error: unknown option `revbase'
usage: git pull [<options>] [<repository> [<refspec>...]]

    -v, --[no-]verbose    be more verbose
    -q, --[no-]quiet      be more quiet
    --[no-]progress       force progress reporting
    --[no-]recurse-submodules[=<on-demand>]
                          control for recursive fetching of submodules

Options related to merging
    -r, --[no-]rebase[=(false|true|merges|interactive)]
                          incorporate changes by rebasing rather than merging
    -n                    do not show a diffstat at the end of the merge
    --[no-]stat           show a diffstat at the end of the merge
    --[no-]log[=<n>]      add (at most <n>) entries from shortlog to merge commit message
    --[no-]signoff[=...]  add a Signed-off-by trailer
    --[no-]squash         create a single commit instead of doing a merge
    --[no-]commit         perform a commit if the merge succeeds (default)
    --[no-]edit           edit message before committing
    --[no-]cleanup <mode> how to strip spaces and #comments from message
    --[no-]ff             allow fast-forward
    --ff-only             abort if fast-forward is not possible
    --[no-]verify         control use of pre-merge-commit and commit-msg hooks
    --[no-]verify-signatures
                          verify that the named commit has a valid GPG signature
    --[no-]autostash      automatically stash/stash pop before and after
    -s, --[no-]strategy <strategy>
                          merge strategy to use
    -X, --[no-]strategy-option <option=value>
                          option for selected merge strategy
    -S, --[no-]gpg-sign[=<key-id>]
                          GPG sign commit
    --[no-]allow-unrelated-histories
                          allow merging unrelated histories

Options related to fetching
    --[no-]all            fetch from all remotes
    -a, --[no-]append     append to .git/FETCH_HEAD instead of overwriting
    --[no-]upload-pack <path>
                          path to upload pack on remote end
    -f, --[no-]force      force overwrite of local branch
    -t, --[no-]tags       fetch all tags and associated objects
    -p, --[no-]prune      prune remote-tracking branches no longer on remote
    -j, --[no-]jobs[=<n>] number of submodules pulled in parallel
    --[no-]dry-run        dry run
    -k, --[no-]keep       keep downloaded pack
    --[no-]depth <depth>  deepen history of shallow clone
    --[no-]shallow-since <time>
                          deepen history of shallow repository based on time
    --[no-]shallow-exclude <revision>
                          deepen history of shallow clone, excluding rev
    --[no-]deepen <n>     deepen history of shallow clone
    --unshallow           convert to a complete repository
    --[no-]update-shallow accept refs that update .git/shallow
    --refmap <refmap>     specify fetch refmap
    -o, --[no-]server-option <server-specific>
                          option to transmit
    -4, --[no-]ipv4       use IPv4 addresses only
    -6, --[no-]ipv6       use IPv6 addresses only
    --[no-]negotiation-tip <revision>
                          report that we have only objects reachable from this object
    --[no-]show-forced-updates
                          check for forced-updates on all updated branches
    --[no-]set-upstream   set upstream for git pull/fetch


karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git pull --rebase origin master
From https://github.com/Karthick252001/SDET_INTERMEDIATE_1
 * branch            master     -> FETCH_HEAD
Auto-merging file.txt
CONFLICT (content): Merge conflict in file.txt
error: could not apply 7076d17... Commit on rebase-branch
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
hint: Disable this message with "git config advice.mergeConflict false"
Could not apply 7076d17... Commit on rebase-branch

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/2)
$ npp file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/2)
$ git add file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 1/2)
$ git rebase --continue
[detached HEAD 3f163e5] after remove conflict Commit on rebase-branch
 1 file changed, 1 deletion(-)
Auto-merging file.txt
CONFLICT (content): Merge conflict in file.txt
error: could not apply c54391c... New commit on Main yes
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
hint: Disable this message with "git config advice.mergeConflict false"
Could not apply c54391c... New commit on Main yes

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 2/2)
$ after npp file.txt
bash: after: command not found

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 2/2)
$ npp file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 2/2)
$ git add file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 2/2)
$ npp file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|REBASE 2/2)
$ git rebase --continue
[detached HEAD d9a9f0a] New commit on Main yes after rebase continue
 1 file changed, 1 insertion(+)
Successfully rebased and updated refs/heads/master.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git push origin master
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 12 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 567 bytes | 567.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git
   77b41ec..d9a9f0a  master -> master

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git push --force origin master
Everything up-to-date

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git pull --rebase origin master
From https://github.com/Karthick252001/SDET_INTERMEDIATE_1
 * branch            master     -> FETCH_HEAD
Already up to date.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git push origin --all
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git
 * [new branch]      feature-branch -> feature-branch
 * [new branch]      rebase-branch -> rebase-branch

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git push origin --tags
Everything up-to-date

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ zip -r git-assignment.zip git-demo-project
        zip warning: name not matched: git-demo-project

zip error: Nothing to do! (try: zip -r git-assignment.zip . -i git-demo-project)

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ zip -r git-assignment.zip . -i git-demo-project
        zip warning: zip file empty

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git pull origin master
From https://github.com/Karthick252001/SDET_INTERMEDIATE_1
 * branch            master     -> FETCH_HEAD
Already up to date.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git merge feature-branch
Already up to date.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git merge rebase-branch
Auto-merging file.txt
CONFLICT (content): Merge conflict in file.txt
Automatic merge failed; fix conflicts and then commit the result.

karth@KARTHICK MINGW64 ~/git-demo-project (master|MERGING)
$ npp file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|MERGING)
$ git add file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|MERGING)
$ git merge rebase-branch
fatal: You have not concluded your merge (MERGE_HEAD exists).
Please, commit your changes before you merge.

karth@KARTHICK MINGW64 ~/git-demo-project (master|MERGING)
$ npp file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|MERGING)
$ git add file.txt

karth@KARTHICK MINGW64 ~/git-demo-project (master|MERGING)
$ giot merge rebase-branch
bash: giot: command not found

karth@KARTHICK MINGW64 ~/git-demo-project (master|MERGING)
$ git merge rebase-branch
fatal: You have not concluded your merge (MERGE_HEAD exists).
Please, commit your changes before you merge.

karth@KARTHICK MINGW64 ~/git-demo-project (master|MERGING)
$ git commit file.txt
fatal: cannot do a partial commit during a merge.

karth@KARTHICK MINGW64 ~/git-demo-project (master|MERGING)
$ git commit
[master 144d75c] after rebsebranch merge .Merge branch 'rebase-branch'

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git merge rebase-branch
Already up to date.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git push origin master
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 331 bytes | 331.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Karthick252001/SDET_INTERMEDIATE_1.git
   d9a9f0a..144d75c  master -> master

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git pull origin master
From https://github.com/Karthick252001/SDET_INTERMEDIATE_1
 * branch            master     -> FETCH_HEAD
Already up to date.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git merge feature-branch
Already up to date.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git merge rebase-branch
Already up to date.

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$ git push origin master
Everything up-to-date

karth@KARTHICK MINGW64 ~/git-demo-project (master)
$
