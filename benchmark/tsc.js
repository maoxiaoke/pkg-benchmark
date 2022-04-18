/* eslint-disable @typescript-eslint/no-use-before-define */
const { fork } = require('child_process');
const { performance } = require('perf_hooks');

const start = performance.now();

const child = fork(
  require.resolve('typescript/bin/tsc'),
);

child.on('exit', (code) => {
  if (code === 1) {
    throw new Error('Doc build failed!');
  } else {
    console.log('time-end', performance.now() - start);
  }
});
