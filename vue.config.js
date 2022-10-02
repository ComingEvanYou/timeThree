const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/app-api":{
        target:"http://base.2yuecloud.com/pro-api/",
        changeOrigin:true,
        pathRewrite:{
          "^/app-api":""
        }
      }
    }
  }
})
