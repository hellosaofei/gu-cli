#! /usr/bin/env node

// console.log("hello 000");
import { Command } from "commander";
import Pack from "../package.json";

// import commands from "./commands";

const program = new Command();
program
  .name(Pack.name)
  .version(Pack.version)
  .helpOption("-h,--help")
  .usage("<command> [option]");
program.parse();
