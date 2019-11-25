import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'micro-reaction/index',
    output: {
        file: 'dist/micro-reaction.js',
        format: "umd",
        name: "micro-reaction"
    },
    plugins: [
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**',
        })
    ]
};