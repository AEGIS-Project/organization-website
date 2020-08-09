# The AEGIS Initiative
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Discord](https://img.shields.io/discord/700225957314691083?label=Discord)
[![Actions Status](https://github.com/The-AEGIS-Initiative/organization-website/workflows/deploy_s3/badge.svg)](https://github.com/The-AEGIS-Initiative/organization-website/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=The-AEGIS-Initiative_organization-website&metric=alert_status)](https://sonarcloud.io/dashboard?id=The-AEGIS-Initiative_organization-website)

This repo is the codebase of the main organization website for [The AEGIS Initiative](https://www.aegisinitiative.io).

The AEGIS Initiative is a **non-profit organization dedicated to building accessible educational technologies** with the goal of providing every student the tools and resources they need to succeed. 

## For developers

### Requirements
- Node.js / NPM: [https://nodejs.org/en/](https://nodejs.org/en/)

### Development Setup
1. Clone the repo: `git clone https://github.com/The-AEGIS-Initiative/organization-website.git`
2. Move into project root: `cd organization-website`
3. Install dependencies: `npm install`

### Development Workflow
1. Create a branch: `git checkout -b <your-branch-name>`
2. Make your changes
3. Make frequent commits: `git commit <files-to-commit> -m <commit-msg>`
3. Push your branch to remote: `git push -u origin <your-branch-name>`

#### Creating Branches
Please follow this branch name convention:
```
<change-type>/<2-3 word summary>/<ticket-id>
```
where `<change-type>` could be `feature`, `bugfix`, `refactor`, `experimental`, or `hotfix`

#### Making Pull Requests
Please follow this PR naming convention:
```
#<ticket-id> <description>
```

