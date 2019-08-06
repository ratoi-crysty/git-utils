git-utils
=========

Git utils

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/git-utils.svg)](https://npmjs.org/package/git-utils)
[![Downloads/week](https://img.shields.io/npm/dw/git-utils.svg)](https://npmjs.org/package/git-utils)
[![License](https://img.shields.io/npm/l/git-utils.svg)](https://github.com/other/git-utils/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g git-utils
$ git-utils COMMAND
running command...
$ git-utils (-v|--version|version)
git-utils/0.0.0 linux-x64 node-v10.16.0
$ git-utils --help [COMMAND]
USAGE
  $ git-utils COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`git-utils clean-local-branches [FILE]`](#git-utils-clean-local-branches-file)
* [`git-utils hello [FILE]`](#git-utils-hello-file)
* [`git-utils help [COMMAND]`](#git-utils-help-command)

## `git-utils clean-local-branches [FILE]`

describe the command here

```
USAGE
  $ git-utils clean-local-branches [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/clean-local-branches.ts](https://github.com/other/git-utils/blob/v0.0.0/src/commands/clean-local-branches.ts)_

## `git-utils hello [FILE]`

describe the command here

```
USAGE
  $ git-utils hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ git-utils hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/other/git-utils/blob/v0.0.0/src/commands/hello.ts)_

## `git-utils help [COMMAND]`

display help for git-utils

```
USAGE
  $ git-utils help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
