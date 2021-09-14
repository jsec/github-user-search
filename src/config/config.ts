// borrowed from https://betterprogramming.pub/how-to-secure-angular-environment-variables-for-use-in-github-actions-39c07587d590

const fs = require('fs');

require('dotenv').config();

const environment = process.env.ENVIRONMENT;
const githubAuthToken = process.env.GITHUB_AUTH_TOKEN;

let targetPath: string;
let isProd: boolean = false;

if (environment === 'production') {
  targetPath = './src/environments/environment.prod.ts';
  isProd = true;
} else {
  targetPath = './src/environments/environment.ts';
}

const newConfigFile = `
export const environment = {
  production: ${isProd},
  GITHUB_AUTH_TOKEN: '${githubAuthToken}'
};
`;

fs.writeFile(targetPath, newConfigFile, (err: any) => console.log(err));
