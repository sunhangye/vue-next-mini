import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

/*
 * 默认导出一个数组，数组中每一个对象都是单独的导出配置文件
 * */

export default [
  {
    // 入口文件
    input: 'packages/vue/src/index.ts',
    // 打包出口
    output: [
      {
        format: 'iife',
        file: './packages/vue/dist/vue.js',
        sourcemap: true,
        name: 'Vue'
      }
    ],
    sourceMap: true,
    plugins: [
      //ts
      typescript({
        sourceMap: false
      }),
      // 模块导入的路径补全
      nodeResolve(),
      // 转commonjs为ESM
      commonjs()
    ]
  }
]
