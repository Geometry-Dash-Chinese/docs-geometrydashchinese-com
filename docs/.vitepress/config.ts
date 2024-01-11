import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '几何冲刺文档站',
    themeConfig: {
        nav: [],
        sidebar: [
            {
                items: [
                    {
                        text: '游戏介绍',
                        link: '/intro'
                    }
                ]
            },
            {
                text: '编辑器',
                items: [
                    {
                        text: '指令',
                        items: []
                    }
                ]
            }
        ]
    }
})
