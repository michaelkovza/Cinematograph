module.exports = [
    {
        title: '«index»',
        filename: 'index.html',
        template: 'src/html/layouts/layout.pug',
        inject: 'body',
        minify: false,
        env: {
            page: 'index.pug'
        },
        chunks: ['index']
    },
    {
        title: '«materials»',
        filename: 'materials.html',
        template: 'src/html/layouts/layout.pug',
        inject: 'body',
        minify: false,
        env: {
            page: 'materials.pug'
        },
        chunks: ['index']
    },
    {
        title: '«author»',
        filename: 'author.html',
        template: 'src/html/layouts/layout.pug',
        inject: 'body',
        minify: false,
        env: {
            page: 'author.pug'
        },
        chunks: ['index']
    },
    {
        title: '«gallery»',
        filename: 'gallery.html',
        template: 'src/html/layouts/layout.pug',
        inject: 'body',
        minify: false,
        env: {
            page: 'gallery.pug'
        },
        chunks: ['index']
    },
    {
        title: '«gallery-detailed»',
        filename: 'gallery-detailed.html',
        template: 'src/html/layouts/layout.pug',
        inject: 'body',
        minify: false,
        env: {
            page: 'gallery-detailed.pug'
        },
        chunks: ['index']
    },
    {
        title: '«video»',
        filename: 'video.html',
        template: 'src/html/layouts/layout.pug',
        inject: 'body',
        minify: false,
        env: {
            page: 'video.pug'
        },
        chunks: ['index']
    },
    {
        title: '«video-detailed»',
        filename: 'video-detailed.html',
        template: 'src/html/layouts/layout.pug',
        inject: 'body',
        minify: false,
        env: {
            page: 'video-detailed.pug'
        },
        chunks: ['index']
    }

];

