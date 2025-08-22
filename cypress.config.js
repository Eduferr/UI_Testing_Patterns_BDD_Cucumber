const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config)

  // quando estiver processando os arquivos
  on('file:preprocessor', webpack({
    webpackOptions: {
      resolve: {
        extensions: ['.js', '.ts']
      },
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                options: config
              }
            ]
          }
        ]
      }
    }
  }))

  return config
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern: '**/*.feature',
    setupNodeEvents
  },
});
