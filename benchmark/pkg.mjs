import { fork } from 'child_process';
import { performance } from 'perf_hooks';
import { createRequire } from 'module';

const start = performance.now();

process.env.start_time = start;

const require = createRequire(import.meta.url);

const child = fork(
  require.resolve('@ice/pkg/lib/cli.js'),
  [
    'build',
  ],
);

child.on('exit', (code) => {
  if (code === 1) {
    throw new Error('Doc build failed!');
  } else {
    console.log('time-end', performance.now() - start);
  }
});
