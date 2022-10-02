const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/app-api":{
        target:"",
        changeOrigin:true,
        pathRewrite:{
          "^/app-api":""
        }
      }
    }
  }
})
