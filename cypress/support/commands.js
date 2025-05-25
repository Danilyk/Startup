// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('formOpening', () =>{
    cy.visit('');
    cy.get('#subscriptionForm')
        .should('exist')
        .scrollIntoView();
});

Cypress.Commands.add('formFilling',(name,email,service,account,withdraw,message) => {
    cy.log('Entering name');
    cy.get('#name')
        .should('exist')
        .type(name);
    cy.log('Entering email');
    cy.get('#email')
        .should('exist')
        .type(email);
    cy.log('Choosing one of the services');
    cy.get('#service')
        .should('exist')
        .select(service);
    cy.log('Account type selection');
    cy.get(`[type="radio"]`)
        .should('exist')
        .check(`${account}`);
    cy.log('Сhoosing withdraw options');
    cy.get('[type="checkbox"]')
        .should('exist')
        .check(withdraw);
    cy.log('Entering message');
    cy.get('#message')
        .should('exist')
        .type(message);    
});

Cypress.Commands.add('checkformSend',(sendingStatus) => {
    cy.contains('button','Request A Quote')
        .should('exist')
        .click();
    cy.log('Checking the visibility of the sending status');
    cy.get('#formStatus').then(($status) => {
        if (sendingStatus == 'success') {
            cy.log('Form submission status should be visible');
            cy.then(() => expect(Cypress.dom.isVisible($status)).to.eq(true));
            cy.log('Form was submitted correctly');
            //----------different paths----------
            //  1.  cy.contains('#formStatus', 'Форма отправлена.').should('be.visible');     
            //  2.  cy.get('#formStatus').invoke('attr','style').then((style) => {
            //        expect(style).be.equal('');
            //      });
        } else {
            cy.log('Form submission status should not be visible');
            cy.then(() => expect(Cypress.dom.isVisible($status)).to.eq(false));
            cy.log('Form has not been sent. Correct behavior');
        }
    });
    
});