# Testing with AVA
First approaching to unit test for node develops and it builded in a basic structure of folders.

This uses a framework called [AVA](https://github.com/avajs/ava) and offers coverage to tests with [istanbul](https://istanbul.js.org/) 

## Commands

**npm test** Run test simply.

**npm run test:cover** Run test coverage.

**npm run test:watch** Run test and keep watching for any change in your files.

**npm run test:watch_cover** Run complete test, coverage and watching for any change in your files.

## Structure

```test/folder``` where folder can be any project or code file that you can test.
Always must add at the same level, one file named like ```name.test.js``` where name can be the name of your project.