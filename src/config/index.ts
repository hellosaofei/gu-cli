const repoInfo = {
  owner: "hellosaofei",
  repoName: "template-repo",
  templateFile: "project.json",
};
const repoUrl = `https://github.com/${repoInfo.owner}/${repoInfo.repoName}.git`;
const templateFileUrl = `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repoName}/contents/${repoInfo.templateFile}`;

const headers = {
  Accept: "application/vnd.github.v3.raw",
};

export { templateFileUrl, repoUrl, headers };
