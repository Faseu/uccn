const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "/dist"),
          routes: ["/", "/Nav2", "/Nav3", "/Nav4", "/404"],
          renderer: new Renderer({
            inject: {
              foo: "bar",
            },
            headless: false,
            renderAfterDocumentEvent: "render-event",
          }),
        }),
      ],
    };
  },
};
