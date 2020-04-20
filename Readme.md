# Botvy RFC Synchronizer

## About the project

This project synchronizes comments to an RFC (request for comments) between the Github issue and a [Discord](https://discord.gg/NsuKYmE) text channel.

## Used technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Inversify](http://inversify.io/)
- [TypeORM](https://typeorm.io/#/)
- [Discord.JS](https://discord.js.org/#/)
- [Octokit](https://github.com/octokit)

## How does this work?

When a new RFC is opened (the issue with the required prefix is created), the synchronizer will create a new Discord text channel for the RFC.

Every time a new message is posted in the text channel or a new comment was added to the issue, it will create corresponding messages for the other side:

- for new Github issue comments a message in the text channel will be created
- for a new message in the text channel a new issue comment will be created
