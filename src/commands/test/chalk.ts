import { Cred, Cgreen, Cblue } from "@/utils/chalk";

export default function () {
  console.log(Cred("hello! red text"));
  console.log(Cgreen("hello! green text"));
  console.log(Cblue("hello! blue text"));
}
