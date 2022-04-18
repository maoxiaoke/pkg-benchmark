/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const fs = require('fs-extra');
const babel = require('@babel/core');
const glob = require('glob');
const { performance } = require('perf_hooks');

const start = performance.now();

const { getBabelConfig } = require('build-scripts-config');

const defaultBabel = getBabelConfig();

const srcPath = path.join(process.cwd(), 'src');

const filesPath = glob.sync('**/*.*', { cwd: srcPath, ignore: ['node_modules/**', '*.d.ts', '*.?(ali|wechat).?(ts|tsx|js|jsx)'] });

const REG_JS = /\.(jsx?|tsx?)$/;

const destPath = path.join(process.cwd(), 'babel-lib');

filesPath.forEach((filePath) => {
  const srcFile = path.join(srcPath, filePath);

  if (REG_JS.test(path.extname(srcFile))) {
    const rightPath = filePath.replace(REG_JS, '.js');
    const { code } = babel.transformFileSync(srcFile, {
      filename: rightPath,
      ...defaultBabel,
    });

    const targetPath = path.join(destPath, rightPath);
    fs.ensureDirSync(path.dirname(targetPath));
    fs.writeFileSync(targetPath, code, 'utf-8');
  }
});

console.log('time-end', performance.now() - start);
