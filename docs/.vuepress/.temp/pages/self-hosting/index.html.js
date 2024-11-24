import comp from "/home/leo/development/daytistics/app/docs/docs/.vuepress/.temp/pages/self-hosting/index.html.vue"
const data = JSON.parse("{\"path\":\"/self-hosting/\",\"title\":\"Self-Hosting\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"self-hosting/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
