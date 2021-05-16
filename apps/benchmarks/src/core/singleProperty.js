const Benchmark = require('benchmark');
const { parsers } = require('@morfeo/core');
const { onCycle, onComplete, onStart } = require('./utils');

const suite = new Benchmark.Suite();

const style = { color: 'primary' };

suite
  .add('regular parsing', () => {
    parsers.resolve({ style, cache: false });
  })
  .add('with cache enabled', () => {
    parsers.resolve({ style, cache: true });
  })
  .on('start', () => onStart('single property parser', style))
  .on('cycle', onCycle)
  .on('complete', () => onComplete(suite));

module.exports = suite;
