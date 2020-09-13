const path = require('path')
const child = require('child_process')
const assert = require('assert')

const run = (dirName) => {
  return new Promise((resolve, reject) => {
    child.exec('node ../../', { cwd: path.join('./test', dirName) }, function (
      err,
      stdout
    ) {
      if (err) {
        reject(err)
      } else {
        resolve(stdout)
      }
    })
  })
}

;(async () => {
  assert.strictEqual(await run('default'), 'No unused files!\n')
  assert.strictEqual(
    await run('excludes'),
    'Found 1 unused file:\ncomponents/link.js\n'
  )
  assert.strictEqual(await run('sub-level-pages'), 'No unused files!\n')
  assert.strictEqual(await run('sub-level-src'), 'No unused files!\n')
  assert.strictEqual(await run('with-ts'), 'No unused files!\n')
  assert.strictEqual(await run('without-ts'), 'No unused files!\n')

  console.log('All tests passed.')
})()
