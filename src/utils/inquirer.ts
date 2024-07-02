import inquirer from "inquirer";

interface templateChoice {
  name: string;
  value: string;
}
const askTest = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "inputTest",
          message: "输入内容",
        },
      ])
      .then((answer) => {
        resolve(answer.inputTest);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const askForTemplate = (choices: templateChoice[]) => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "template",
          message: "选择一个模板",
          choices,
        },
      ])
      .then((answer) => {
        // answer:{name:value}
        resolve(answer.template);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { askTest, askForTemplate };
