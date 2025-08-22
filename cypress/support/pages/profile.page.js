/// <reference types="cypress"/>

export const profilePage = {
    //objeto
    customerName: () => { return cy.get('[data-testid="CustomerName"]') }
}