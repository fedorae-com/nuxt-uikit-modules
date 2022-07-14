const path = require("path");
import uikit from 'uikit'

export default async function () {
  const { nuxt } = this

  this.addPlugin({ 
    src: path.resolve(__dirname, "plugin.js"), 
    fileName: 'uikit.js',
    ssr: false 
  });
}