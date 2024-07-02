# gulihj-cli

## 介绍

gulihj-cli 是一个脚手架工具，提供快速生成代码的能力，解决了官方脚手架每次需要从零开始创建项目的麻烦

## 安装

### 通过 npm

**全局安装**

```sh
npm i @gulihj/cli -g
```

**项目中安装**

```sh
npm i @gulihj/cli -D
```

安装之后，你就可以在命令行中访问 `gucli` 命令。你可以通过简单运行 `gucli`，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确

```sh
gucli --version
```

## 用法

你可以直接运行 `gucli` 来查看如何使用`gulihj-cli`，也可以携带 -h 或者 --help 参数：

```sh
gucli
# or
gucli -h
# or
gucli --help
```

你会得到以下的结果：

```sh
Usage: gu-cli <command> [option]

Options:
  -V, --version                    output the version number
  -h,--help                        display help for command

Commands:
  create [options] <project-name>  create a Project
  chalk [options]                  test npm module 【chalk.js】
  choose [options]                 test npm module 【inquirer.js】
  loading [options]                test npm module 【loading-cli.js】
  help [command]                   display help for command
```

### options

**--version**
携带该参数，你会得到当前脚手架的版本

```sh

# 你可以这样使用该参数
gucli --version
# 也可以使用它的简写模式
gucli -V
```

### commands

运行以下命令来查看如何使用某一个具体的命令

```sh
gucli <command> --help
# 比如你要查看 init 命令如何使用
gucli init --help
```

# 需要安装的依赖

```sh
pnpm add typescript
pnpm add commander
pnpm add chalk
pnpm add inquirer
pnpm add loading-cli
pnpm add ora
pnpm add axios
pnpm add tsc-alias
pnpm add @types/node
```
