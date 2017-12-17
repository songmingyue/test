module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai'],
        reporters: ['spec'],
        files: ['./specs/*.spec.js']
    });
}