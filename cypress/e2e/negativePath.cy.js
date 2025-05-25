import invalidUserData from './data/invalidUserData'; // 
import validUserData from './data/validUserData';

describe('Check form negative path', () => {
    it('Sending an empty form', () => {
        cy.formOpening();
        cy.intercept('https://example.com/api/subscribe').as('sendingFormData');
        cy.get('#subscriptionForm').within(() => {
            cy.contains('button','Request A Quote')
                .should('exist')
                .click();
            cy.get('#formStatus').should('not.be.visible');
            cy.get('#name').should('have.class','is-invalid');
            cy.get('#email').should('have.class','is-invalid');
            cy.get('#message').should('have.class','is-invalid');
        });
        
    });

    it('Incorrect Name', () => {
        cy.formOpening();
        cy.get('#subscriptionForm').within(() => {
            cy.formFilling(
                invalidUserData.invalidUser.name,
                validUserData.userSecond.email, 
                validUserData.userSecond.service,
                validUserData.userSecond.accountPurpose,
                validUserData.userSecond.withdrawOptions,
                validUserData.userSecond.message, 
            );

            cy.get('#name').should('have.class','is-invalid');
            cy.get('#email').should('have.class','is-valid');
            cy.get('#message').should('have.class','is-valid');
            
            cy.checkformSend('fail');
        });
    });

    it('Incorrect Email', () => {
        cy.formOpening();
        cy.get('#subscriptionForm').within(() => {
            cy.formFilling(
                validUserData.userSecond.name, 
                invalidUserData.invalidUser.email,
                validUserData.userSecond.service,
                validUserData.userSecond.accountPurpose,
                validUserData.userSecond.withdrawOptions,
                validUserData.userSecond.message, 
            );

            cy.get('#name').should('have.class','is-valid');
            cy.get('#email').should('have.class','is-invalid');
            cy.get('#message').should('have.class','is-valid');
            
            cy.checkformSend('fail');
        });
    });

    it('Incorrect Message', () => {
        cy.formOpening();
        cy.get('#subscriptionForm').within(() => {
            cy.formFilling(
                validUserData.userSecond.name, 
                validUserData.userSecond.email,
                validUserData.userSecond.service,
                validUserData.userSecond.accountPurpose,
                validUserData.userSecond.withdrawOptions,                
                invalidUserData.invalidUser.message,
            );

            cy.get('#name').should('have.class','is-valid');
            cy.get('#email').should('have.class','is-valid');
            cy.get('#message').should('have.class','is-invalid');
            
            cy.checkformSend('fail');
        });
    });
});