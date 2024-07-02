import { askTest } from "@/utils/inquirer";

export default async function () {
  try {
    const res = await askTest();
    console.log("您的输入内容为：", res);
  } catch (e) {
    console.error(e);
  }
}
