import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: 'https://docs.daytistics.com/',
  lang: 'en-US',

  title: 'Daytistics',
  description: 'An AI-driven Productivity Software',

  head: [
    ['link', { rel: "icon", type: "image/x-icon", href: "/images/logo.png"}],
  ],

  theme: defaultTheme({
    logo: '/images/logo.png',

    navbar: ['/', '/app-manual/', '/self-hosting/', '/contributing/', '/miscellaneous/'],
  }),

  bundler: viteBundler(),
})
