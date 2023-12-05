import { babel } from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import svgSprite from 'rollup-plugin-svg-sprite-deterministic'
import scss from 'rollup-plugin-scss'
import uglify from '@lopatnov/rollup-plugin-uglify'
import legacy from '@rollup/plugin-legacy'
import nodeResolve from '@rollup/plugin-node-resolve'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import commonjs from 'rollup-plugin-commonjs'

export default [
  // Bundle version
  {
    input: 'src/js/bootstrap-italia.entry.js',
    output: {
      file: 'dist/js/bootstrap-italia.bundle.min.js',
      format: 'umd',
      generatedCode: 'es2015',
      name: "bootstrap"
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      copy({
        targets: [
          { src: 'src/assets', dest: 'dist' },
          { src: 'src/fonts', dest: 'dist' },
        ],
      }),
      svgSprite({
        outputFolder: 'dist/svg',
      }),
      scss({
        output: 'dist/css/bootstrap-italia.min.css',
        outputStyle: 'compressed',
        sourceMap: true,
        watch: 'src/scss',
      }),
      nodeResolve(),
      commonjs(),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      uglify(),
    ],
  },
  // Non-bundled version
  {
    input: 'src/js/bootstrap-italia.entry.js',
    output: {
      file: 'dist/js/bootstrap-italia.min.js',
      format: 'umd',
      generatedCode: 'es2015',
      name: "bootstrap",
      globals: {
        '@popperjs/core' : 'Popper', 
        '@splidejs/splide' : 'Splide', 
        'masonry-layout' : 'MasonryPlugin', 
        'accessible-autocomplete' : 'accessibleAutocomplete',
        'animejs/lib/anime.es.js' : 'anime',
        'video.js' : 'videojs'
      },
    },
    external: [
      '@popperjs/core', 
      '@splidejs/splide', 
      'masonry-layout', 
      'accessible-autocomplete',
      'animejs/lib/anime.es.js',
      'video.js'
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      copy({
        targets: [
          { src: 'src/assets', dest: 'dist' },
          { src: 'src/fonts', dest: 'dist' },
        ],
      }),
      svgSprite({
        outputFolder: 'dist/svg',
      }),
      scss({
        output: 'dist/css/bootstrap-italia.min.css',
        outputStyle: 'compressed',
        sourceMap: true,
        watch: 'src/scss',
      }),
      nodeResolve(),
      commonjs(),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      uglify(),
    ],
  },
  // ESM version
  {
    input: 'src/js/bootstrap-italia.esm.js',
    output: [
      {
        format: 'es',
        exports: 'named',
        sourcemap: true,
        dir: 'dist',
        preserveModules: true
      },
    ],
  },
  // Entry for documentation
  {
    input: 'docs/assets/src/js/docs-entry.js',
    output: {
      file: 'docs/assets/dist/js/docs.min.js',
      compact: true,
      format: 'iife',
    },
    context: "window",
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      legacy({
        './cover-animation.js': {
          initCoverAnimation: 'animation.initCoverAnimation',
        },
      }),
      scss({
        output: 'docs/assets/dist/css/docs.min.css',
        outputStyle: 'compressed',
        watch: 'docs/assets/src/scss',
      }),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
    ],
  },
  // Entry for Comuni
  {
    input: 'src/scss/bi-verde-standard.scss',
    plugins: [scss({ output: 'dist/css/bi-verde-standard.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },

  {
    input: 'src/scss/bi-blu-000066.scss',
    plugins: [scss({ output: 'dist/css/bi-blu-000066.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-blu-00007A.scss',
    plugins: [scss({ output: 'dist/css/bi-blu-00007A.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-blu-00238F.scss',
    plugins: [scss({ output: 'dist/css/bi-blu-00238F.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-blu-00337A.scss',
    plugins: [scss({ output: 'dist/css/bi-blu-00337A.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-blu-00517A.scss',
    plugins: [scss({ output: 'dist/css/bi-blu-00517A.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-blu-005266.scss',
    plugins: [scss({ output: 'dist/css/bi-blu-005266.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-blu-29007A.scss',
    plugins: [scss({ output: 'dist/css/bi-blu-29007A.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },

  {
    input: 'src/scss/bi-marrone-5C3D00.scss',
    plugins: [scss({ output: 'dist/css/bi-marrone-5C3D00.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-marrone-5C5C00.scss',
    plugins: [scss({ output: 'dist/css/bi-marrone-5C5C00.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },

  {
    input: 'src/scss/bi-rosso-660000.scss',
    plugins: [scss({ output: 'dist/css/bi-rosso-660000.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-rosso-660033.scss',
    plugins: [scss({ output: 'dist/css/bi-rosso-660033.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-rosso-662200.scss',
    plugins: [scss({ output: 'dist/css/bi-rosso-662200.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-rosso-7A0000.scss',
    plugins: [scss({ output: 'dist/css/bi-rosso-7A0000.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-rosso-992600.scss',
    plugins: [scss({ output: 'dist/css/bi-rosso-992600.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },

  {
    input: 'src/scss/bi-verde-005205.scss',
    plugins: [scss({ output: 'dist/css/bi-verde-005205.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-verde-005C00.scss',
    plugins: [scss({ output: 'dist/css/bi-verde-005C00.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-verde-005C1F.scss',
    plugins: [scss({ output: 'dist/css/bi-verde-005C1F.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-verde-005C3D.scss',
    plugins: [scss({ output: 'dist/css/bi-verde-005C3D.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-verde-005C5C.scss',
    plugins: [scss({ output: 'dist/css/bi-verde-005C5C.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-verde-135200.scss',
    plugins: [scss({ output: 'dist/css/bi-verde-135200.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-verde-2C5200.scss',
    plugins: [scss({ output: 'dist/css/bi-verde-2C5200.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-verde-4A5C00.scss',
    plugins: [scss({ output: 'dist/css/bi-verde-4A5C00.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-viola-52007A.scss',
    plugins: [scss({ output: 'dist/css/bi-viola-52007A.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-viola-5C005C.scss',
    plugins: [scss({ output: 'dist/css/bi-viola-5C005C.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
  {
    input: 'src/scss/bi-viola-7A0052.scss',
    plugins: [scss({ output: 'dist/css/bi-viola-7A0052.min.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },

  {
    input: 'src/scss/bi-blu-OC.scss',
    plugins: [scss({ output: 'dist/css/bi-blu-OC.css', outputStyle: 'compressed', watch: 'src/scss' })],
  },
]
