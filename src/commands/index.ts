import CommandCreate from "./create/index";

import CommandChalk from "./test/chalk";
import CommandInquirer from "./test/choose";
import CommandLoading from "./test/loading";

const commands = {
  // 真实命令create：创建一个工程
  "create <project-name>": {
    description: "create a Project",
    option: [
      {
        cmd: "-f,--force",
        msg: "overwrite target if it exists",
      },
      {
        cmd: "-t,--test",
        msg: "test option of CommandCreate",
      },
    ],
    action: CommandCreate,
  },
  // 测试专用：chalk命令,打印出不同的颜色
  chalk: {
    description: "test npm module 【chalk.js】",
    option: [
      {
        cmd: "-t,--test",
        msg: "test option of CommandChalk",
      },
    ],
    action: CommandChalk,
  },
  // 测试专用：choose 命令，用以提供给用户不同的选择
  choose: {
    description: "test npm module 【inquirer.js】",
    option: [
      {
        cmd: "-t,--test",
        msg: "test option of CommandInquirer",
      },
    ],
    action: CommandInquirer,
  },
  // 测试专用：loading命令，模拟加载
  loading: {
    description: "test npm module 【loading-cli.js】",
    option: [
      {
        cmd: "-t,--test",
        msg: "test option of CommandLoading",
      },
    ],
    action: CommandLoading,
  },
};

export default commands;
