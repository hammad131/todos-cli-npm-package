hammad
======

todo cli app

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hammad.svg)](https://npmjs.org/package/hammad)
[![CircleCI](https://circleci.com/gh/hammad131/hammad/tree/master.svg?style=shield)](https://circleci.com/gh/hammad131/hammad/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/hammad131/hammad?branch=master&svg=true)](https://ci.appveyor.com/project/hammad131/hammad/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/hammad.svg)](https://npmjs.org/package/hammad)
[![License](https://img.shields.io/npm/l/hammad.svg)](https://github.com/hammad131/hammad/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hammad
$ hammad COMMAND
running command...
$ hammad (-v|--version|version)
hammad/1.0.0 win32-x64 node-v14.15.0
$ hammad --help [COMMAND]
USAGE
  $ hammad COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hammad hello [FILE]`](#hammad-hello-file)
* [`hammad help [COMMAND]`](#hammad-help-command)

## `hammad hello [FILE]`

describe the command here

```
USAGE
  $ hammad hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ hammad hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/hammad131/hammad/blob/v1.0.0/src/commands/hello.ts)_

## `hammad help [COMMAND]`

display help for hammad

```
USAGE
  $ hammad help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
