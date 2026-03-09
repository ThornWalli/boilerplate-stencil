/* eslint-disable import-x/no-nodejs-modules */
import { execSync, spawn } from 'node:child_process';
import { performance } from 'node:perf_hooks';
import { readFileSync, writeFileSync } from 'node:fs';

const ITERATIONS = 20;
const STENCIL_BIN = 'node_modules/@stencil/core/bin/stencil';
const BUILD_ARGS = ['build'];
const WATCH_ARGS = ['build', '--dev', '--watch', '--no-serve'];
const FILE_TO_CHANGE = 'src/components/my-component/my-component.tsx';

const formatTime = ms => {
  if (ms < 5000) return `${ms.toFixed(2)}ms`;
  const s = ms / 1000;
  if (s < 60) return `${s.toFixed(2)}s`;
  const m = s / 60;
  if (m < 60) return `${m.toFixed(2)}m`;
  const h = m / 60;
  return `${h.toFixed(2)}h`;
};

function runBuildBenchmark() {
  const command = `node ${STENCIL_BIN} ${BUILD_ARGS.join(' ')}`;
  console.log(`\nStarting Build Benchmark: ${command} (${ITERATIONS} iterations)`);
  const results = [];
  for (let i = 1; i <= ITERATIONS; i++) {
    const start = performance.now();
    try {
      execSync(command, { stdio: 'ignore' });
      const duration = performance.now() - start;
      console.log(`  Iteration ${i}/${ITERATIONS} completed in ${formatTime(duration)}`);
      results.push(duration);
    } catch (e) {
      console.error(`  Iteration ${i}/${ITERATIONS} failed after ${formatTime(performance.now() - start)}: ${e.message}`);
    }
  }
  return results;
}

async function runWatchBenchmark() {
  const command = `${STENCIL_BIN} ${WATCH_ARGS.join(' ')}`;
  console.log(`\nStarting Watch Benchmark: ${command} (${ITERATIONS} iterations)`);
  const originalContent = readFileSync(FILE_TO_CHANGE, 'utf8');
  const results = [];

  return new Promise(resolve => {
    const child = spawn('node', [STENCIL_BIN, ...WATCH_ARGS]);
    let iteration = 0;
    let startTime = 0;

    child.stdout.on('data', data => {
      if (data.toString().includes('build finished')) {
        if (startTime) {
          const duration = performance.now() - startTime;
          results.push(duration);
          console.log(`  Iteration ${iteration}/${ITERATIONS} completed in ${formatTime(duration)}`);
        }

        if (iteration < ITERATIONS) {
          iteration++;
          startTime = performance.now();
          writeFileSync(FILE_TO_CHANGE, `${originalContent}\n// ${iteration}`);
        } else {
          child.kill();
        }
      }
    });

    child.on('exit', () => {
      writeFileSync(FILE_TO_CHANGE, originalContent);
      resolve(results);
    });
  });
}

function printStats(name, results) {
  if (!results.length) return console.log(`\n${name} Benchmark failed`);
  const iterations = results.length;
  const total = results.reduce((a, b) => a + b, 0);
  const avg = total / iterations;
  const min = Math.min(...results);
  const max = Math.max(...results);

  console.log(`\n${name} Benchmark Results:`);
  console.log(`  Iterations: ${iterations}`);
  console.log(`  Average:    ${formatTime(avg)}`);
  console.log(`  Minimum:    ${formatTime(min)}`);
  console.log(`  Maximum:    ${formatTime(max)}`);
  console.log(`  Total:      ${formatTime(total)}`);
}

(async () => {
  const buildResults = runBuildBenchmark();
  const watchResults = await runWatchBenchmark();

  console.log('\n' + '='.repeat(40) + '\nFINAL BENCHMARK SUMMARY\n' + '='.repeat(40));
  printStats('Build', buildResults);
  printStats('Watch', watchResults);
})().catch(console.error);
