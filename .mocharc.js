module.exports = {
    diff: true,
    extension: ['js'],
    package: './package.json',
    reporter: 'spec',
    slow: 75,
    timeout: 50000,
    ui: 'bdd',
    'watch-files': ['test/**/*.js', 'Source/**/*.js'],
    spec: 'test/**/*.js'
};
