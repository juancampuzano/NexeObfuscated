const { compile } = require('nexe')
const output = `compiled/carApp.exe`;

compile({
  input: './index.js',
  output,
  target: { platform: 'mac', arch: 'x64', nodeVersion: '10.19.0'}
}).then(() => {
  console.log('success')
})