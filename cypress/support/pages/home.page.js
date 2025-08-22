/// <reference types="cypress"/>

//objeto
export const homepage = {
    openMenu (menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    }

}