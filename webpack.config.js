// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    entry: './src/app.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            constants: path.resolve(__dirname, 'src/constants/'),
            controllers: path.resolve(__dirname, 'src/controllers/'),
            helpers: path.resolve(__dirname, 'src/helpers/'),
            types: path.resolve(__dirname, 'src/types/'),
        },
    },
};
