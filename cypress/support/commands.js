
// Importando uma exportação nomeada 'homepage' do arquivo home.page
//Exportação nomeada (named export) Permite exportar múltiplos itens por arquivo
import { homepage } from "./pages/home.page"
// (no arquivo home.page, deve existir 'export const homepage = ...')

// Importando a exportação default do arquivo login.page
//Exportação default Só pode haver um export default por arquivo
import loginPage from "./pages/login.page"
// (no arquivo login.page, deve existir 'export default ...')

Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    homepage.openMenu('Account')
    loginPage.login(email, senha)
    homepage.openMenu('Account')
    
})