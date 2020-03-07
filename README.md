
Upload Angular project to GitHub server using the command line
Now open the command prompt on the root path of your project and follow these steps.
---------------------------------------------------------------------------------------------------

1. git init

This will create a brand new “.git” folder on the root path of your project. Generally, git commands are not available outside the repository and this folder helps you to run the other git commands at that path.

2. git add .

This will add all the modified and new untracked files to the directories and making them ready for the commit.

3. git commit –m “initial commit”

This will save all your changes to the local repository and make them ready to push on the remote server. The last part of the command is the commit message, you can replace that with anything descriptive.

4. git remote add origin https://github.com/chandan061184/Angular-Material.git

This will link your remote repository with your local directory.

5. git push –u origin master

This will push all the changes to the master branch.

6. git push -f origin master (force)
---------------------------------------------------------------------------------------------------