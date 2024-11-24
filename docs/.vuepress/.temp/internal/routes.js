export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/leo/development/daytistics/app/docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/app-manual/", { loader: () => import(/* webpackChunkName: "app-manual_index.html" */"/home/leo/development/daytistics/app/docs/docs/.vuepress/.temp/pages/app-manual/index.html.js"), meta: {"title":"Application Manual"} }],
  ["/contributing/", { loader: () => import(/* webpackChunkName: "contributing_index.html" */"/home/leo/development/daytistics/app/docs/docs/.vuepress/.temp/pages/contributing/index.html.js"), meta: {"title":"Contributing"} }],
  ["/miscellaneous/", { loader: () => import(/* webpackChunkName: "miscellaneous_index.html" */"/home/leo/development/daytistics/app/docs/docs/.vuepress/.temp/pages/miscellaneous/index.html.js"), meta: {"title":"Miscellaneous"} }],
  ["/self-hosting/", { loader: () => import(/* webpackChunkName: "self-hosting_index.html" */"/home/leo/development/daytistics/app/docs/docs/.vuepress/.temp/pages/self-hosting/index.html.js"), meta: {"title":"Self-Hosting"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/leo/development/daytistics/app/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
