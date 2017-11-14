module.exports = [
    {
        title: '«Высокие Технологии Инжиниринга»',
        filename: 'index.html',
        template: 'src/html/layouts/layout.pug',
        inject: 'body',
        minify: false,
        env: {
            page: 'index.pug'
        },
        chunks: ['index']
    }
];
