import {defineConfig} from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
    AntDesignVueResolver
} from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        }
    },
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver()]
        }),
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
        })
    ]
})
