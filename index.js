const sass = require('sass')
const fs = require('fs')

const result = sass.renderSync({
    file: '_index.scss',
    includePaths: [ 'partials' ]
})
fs.writeFileSync('main.css', result.css)
