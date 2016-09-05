# Slack Commands
Custom slack slash commands for our slack group.

**NOTE**: The bot is temporarily hosted on a fast and loose OpenShift setup, because of this Babel is in ```dependencies``` rather than ```devDependencies```. When the package is deployed it is built on the instance. OpenShift doesn't seem to like installing devDependencies so anything used to build from src needs to be in the regular deps.

## Current Commands

### Urban Bot - ```/urban```
Search [Urban Dictionary](http://www.urbandictionary.com/) for a specific word or run the command solo to get a random one.   
Returns the word, it's definition and an example if available.