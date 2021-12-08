/// <reference types="cypress"/>

describe("Login", () => {
    beforeEach (() => cy.visit("https://account.blip.ai"));

    it("validar esqueci a senha", () => {
        cy.get('#login-forgot-password').click();
        cy.get('#Email').type('tiagodo10@hotmail.com');
        cy.get('#submitButton').click();
        cy.get('.bp-c-desk').should('contain', 'Enviamos um email para t****');
    });

    it.only("validar campo e-mail como obrigatório", () => {
        cy.get('#email').type(' ');
        cy.get('#password').type('123456');
        cy.get('.error').should('contain', 'This field is mandatory');
        cy.get('#blip-login').should('be.disabled');
    }); 
});

