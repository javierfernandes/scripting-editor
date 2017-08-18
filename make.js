const b = require('substance-bundler')

b.task('clean', () => b.rm('./dist'))

// copy assets
b.task('assets', () => {
  b.copy('app/index.html', './dist/index.html')
  b.copy('./node_modules/font-awesome', './dist/font-awesome')
})

b.task('build', ['clean', 'assets'], () => _client(false))
b.task('dev:build', ['clean', 'assets'], () => _client(true))

b.task('default', ['build'])

// starts a server when CLI argument '-s' is set
b.setServerPort(5555)
b.serve({ static: true, route: '/', folder: 'dist' })

function _client(devMode) {
  b.css('./app/app.css', 'dist/app.css', { variables: true })
  b.js('app/app.js', {
    target: {
      dest: './dist/app.js',
      format: 'umd',
      moduleName: 'app'
    },
    buble: !devMode && { 
      objectAssign: 'Object.assign'
    }
  })
}
