import { exec } from "child_process";
import path from "path";
import { isExist, mkDir, rmDir, copyDir } from "@/utils/file";
import { getTemplateInfo } from "@/api/index";
import { askForTemplate } from "@/utils/inquirer";
import { repoUrl } from "@/config/index";
/**
 * @param projectName 用户想要创建的项目的名称
 * @param cmd 用户执行命令添加的option
 */
export default async function (projectName, cmd) {
  // 拼接得到将要创建的项目的路径，位于项目的根目录下
  const project_path = path.join(process.cwd(), projectName);
  // 判断项目目录是否存在
  const is_path_exist = await isExist(project_path);
  // 如果不存在，则在项目根目录下进行创建
  if (!is_path_exist) {
    await mkDir(project_path);
  } else {
    // 如果存在，就要考虑是否替换该目录了，
    // 这时就需要看用户执行create 命令时，是否指定了--force额外参数
    // 如果 --force，强制删除已经存在的目录不管里面是什么
    if (cmd.force) {
      // 1. 删除已有的目录
      await rmDir(project_path);
      // 2. 创建新的目录
      await mkDir(project_path);
    }
    // 如果没有，抛出错误，终止create 命令
    throw new Error(`${project_path} Path already exists `);
  }
  // 代码到这，已经保证用户能够对目录进行操作了

  try {
    // 1. 先发网络请求，请求project.json，看都有哪些分支能选择
    const templateList: any = await getTemplateInfo();
    //2.得到的res为[{name:'',value:''}],将其传入
    const userChoice = await askForTemplate(templateList);
    // 得到的userChoice为一个字符串，比如vue3-template,每个都对应远程仓库的一个分支，直接请求即可
    exec(`git clone -b ${userChoice} ${repoUrl}`, async (err) => {
      if (err) {
        console.error(err);
        return;
      }
      // 代码到这里，远程仓库指定分支的代码全部克隆在了根目录的template-repo（远程仓库名称）下
      const oldPath = path.resolve(process.cwd(), "template-repo");
      // 需要将其复制到project_path中,并删除telpate-repo目录
      await copyDir(oldPath, project_path);
      await rmDir(oldPath);
    });
  } catch (e) {
    console.error(e);
  }
}
