
Plugins instalados:

>>cypress-cucumber-preprocessor
npm install @badeball/cypress-cucumber-preprocessor
- um plugin que permite escrever testes automatizados usando a sintaxe BDD, em formato Gherkin (Given, When, Then), em vez de apenas código JavaScript.

>>cypress-webpack-preprocessor
npm i @cypress/webpack-preprocessor
- um plugin que permite usar o Webpack para empacotar, compilar e transformar os arquivos de teste do Cypress antes de executá-los.

>>Importe para cypress.config.js
const webpack =  require("@cypress/webpack-preprocessor");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor")