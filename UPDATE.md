# UPDATE

This file is a manually maintained list of changes for each release

## v1.0.0(2024-07-02)

- 主要进展：基本完成脚手架项目的搭建工作
- 支持的指令：
  > - chalk:test npm module 【chalk.js】
  > - choose:test npm module 【inquirer.js】
  > - loading:test npm module 【loading-cli.js】
  > - create：Create a Project
- 注意：
  > - 关于 create 生成模板的思路：该脚手架项目中并没有内置任何模板，模板全部放在了 github 中，执行 create 命令后，发送网络请求，并根据用户选择主动拉取
- 需要优化的方向：
  > - loading 加载效果：目前基于 【loading-cli】实现，后续将改用 【ora】模块
  > - create 指令：1.0.0 版本中，create 命令拉取远程仓库后，项目再根据用户要生成的项目名进行拷贝和删除操作，比较耗费性能
