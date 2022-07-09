# TestActions

# Command structure:
act [<event>] [options]
If no event name passed, will default to "on: push"

# List the actions for the default event:
act -l

# List the actions for a specific event:
act workflow_dispatch -l

# Run the default (`push`) event:
act

# Run a specific event:
act pull_request

# Run a specific job:
act -j test

# Run in dry-run mode:
act -n

# Enable verbose-logging (can be used with any of the above commands)
act -v



The new workflow
1. The developer takes work off the Kanban board, creates a branch, and does “the work”
2.The developer commits and pushes this branch, creating a new pull request. This triggers a PR build, and a new pull request deployment. For example, if the pull request is #415, a resource group is created “SamLearnsAzurePR415, and all of the resources are named with PR415, and the DNS to the website is setup as pr415.samlearnsazure.com.
3. When the pull request is complete, a web hook monitors changes, and runs some code to delete the resource group.

#raised a pr to test the workflow
