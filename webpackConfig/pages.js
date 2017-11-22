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
    }
];

