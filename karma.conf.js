module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [{ 
            pattern: 'test-config.js',
            watched: false 
        }],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-config.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [{ 
                    test: /\.js/, 
                    exclude: /node_modules/, 
                    loader: 'babel-loader' 
                }]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};