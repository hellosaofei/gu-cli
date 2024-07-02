#! /usr/bin/env node

// console.log("hello 000");
import { Command } from "commander";
import Pack from "../package.json";

import commands from "@/commands/index";

const program = new Command();
program
  .name(Pack.name)
  .version(Pack.version)
  .helpOption("-h,--help")
  .usage("<command> [option]");
Object.keys(commands).forEach((currentCommandKey) => {
  // 拿到当前命令的配置项对象
  const currentCommandValue = commands[currentCommandKey];
  // 注册当前命令并返回一个对象
  const currentCommand = program.command(currentCommandKey);
  if (currentCommandValue.option && currentCommandValue.option.length > 0) {
    currentCommandValue.option.forEach((item) => {
      currentCommand.option(item.cmd, item.msg || "");
    });
  }
  // 当前命令的描述信息
  currentCommand.description(currentCommandValue.description);
  // 当前命令的执行函数
  currentCommand.action(currentCommandValue.action);
});

program.parse();
