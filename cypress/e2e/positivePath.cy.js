import validUserData from './data/validUserData'; 

describe('Check form positive path', () => {

    it('Sending the First user`s data', () => {
        cy.formOpening();
        cy.intercept('https://example.com/api/subscribe').as('sendingFormData');
        cy.get('#subscriptionForm').within(() => {
            cy.formFilling(
                validUserData.userFirst.name,
                validUserData.userFirst.email,
                validUserData.userSecond.service,
                validUserData.userFirst.accountPurpose,
                validUserData.userFirst.withdrawOptions,
                validUserData.userFirst.message,                
            );
            cy.get('#name').should('have.class','is-valid');
            cy.get('#email').should('have.class','is-valid');
            cy.get('#service').should('have.class','is-valid');
            cy.get('#message').should('have.class','is-valid');
            
            cy.checkformSend('success');
        });
        cy.wait('@sendingFormData').then( sendingData => {
            const requestData = sendingData.request;
            const responseData = sendingData.response;

            expect(requestData.body.name).to.be.eq(validUserData.userFirst.name);
            expect(requestData.body.email).to.be.eq(validUserData.userFirst.email);
            expect(requestData.body.service).to.be.eq(validUserData.userSecond.service);
            expect(requestData.body.accountPurpose).to.be.eq(validUserData.userFirst.accountPurpose);
            expect(requestData.body.withdrawOptions).to.deep.eq(validUserData.userFirst.withdrawOptions);
            expect(requestData.body.message).to.be.eq(validUserData.userFirst.message);

            expect(responseData.statusCode)
            expect(responseData.statusCode, 'Status code should be 200').to.eq(200);
        });
    });

    it('Sending the Second user`s data', () => {
        cy.formOpening();
        cy.intercept('https://example.com/api/subscribe').as('sendingFormData');
        cy.get('#subscriptionForm').within(() => {
            cy.formFilling(
                validUserData.userSecond.name,
                validUserData.userSecond.email,
                validUserData.userSecond.service,
                validUserData.userSecond.accountPurpose,
                validUserData.userSecond.withdrawOptions,
                validUserData.userSecond.message, 
            );
            cy.get('#name').should('have.class','is-valid');
            cy.get('#email').should('have.class','is-valid');
            cy.get('#service').should('have.class','is-valid');
            cy.get('#message').should('have.class','is-valid');
            
            cy.checkformSend('success');
        });
        cy.wait('@sendingFormData').then( sendingData => {
            const requestData = sendingData.request;
            const responseData = sendingData.response;

            expect(requestData.body.name).to.be.eq(validUserData.userSecond.name);
            expect(requestData.body.email).to.be.eq(validUserData.userSecond.email);
            expect(requestData.body.service).to.be.eq(validUserData.userSecond.service);
            expect(requestData.body.accountPurpose).to.be.eq(validUserData.userSecond.accountPurpose);
            expect(requestData.body.withdrawOptions).to.deep.eq(validUserData.userSecond.withdrawOptions);
            expect(requestData.body.message).to.be.eq(validUserData.userSecond.message);

            expect(responseData.statusCode)
            expect(responseData.statusCode, 'Status code should be 200').to.eq(200);
        });

    });

    it('Sending the Third user`s data', () => {
        cy.formOpening();
        cy.intercept('https://example.com/api/subscribe').as('sendingFormData');
        cy.get('#subscriptionForm').within(() => {
            cy.formFilling(
                validUserData.userThird.name,
                validUserData.userThird.email,
                validUserData.userThird.service,
                validUserData.userThird.accountPurpose,
                validUserData.userThird.withdrawOptions,
                validUserData.userThird.message, 
            );
            cy.get('#name').should('have.class','is-valid');
            cy.get('#email').should('have.class','is-valid');
            cy.get('#service').should('have.class','is-valid');
            cy.get('#message').should('have.class','is-valid');
            
            cy.checkformSend('success');
        });
        cy.wait('@sendingFormData').then( sendingData => {
            const requestData = sendingData.request;
            const responseData = sendingData.response;

            expect(requestData.body.name).to.be.eq(validUserData.userThird.name);
            expect(requestData.body.email).to.be.eq(validUserData.userThird.email);
            expect(requestData.body.service).to.be.eq(validUserData.userThird.service);
            expect(requestData.body.accountPurpose).to.be.eq(validUserData.userThird.accountPurpose);
            expect(requestData.body.withdrawOptions).to.deep.eq(validUserData.userThird.withdrawOptions);
            expect(requestData.body.message).to.be.eq(validUserData.userThird.message);

            expect(responseData.statusCode)
            expect(responseData.statusCode, 'Status code should be 200').to.eq(200);
        });

    });

    it('Sending the Third user`s data', () => {
        cy.formOpening();
        cy.intercept('https://example.com/api/subscribe').as('sendingFormData');
        cy.get('#subscriptionForm').within(() => {
            cy.formFilling(
                validUserData.userFourth.name,
                validUserData.userFourth.email,
                validUserData.userFourth.service,
                validUserData.userFourth.accountPurpose,
                validUserData.userFourth.withdrawOptions,
                validUserData.userFourth.message, 
            );
            cy.get('#name').should('have.class','is-valid');
            cy.get('#email').should('have.class','is-valid');
            cy.get('#service').should('have.class','is-valid');
            cy.get('#message').should('have.class','is-valid');
            
            cy.checkformSend('success');
        });
        cy.wait('@sendingFormData').then( sendingData => {
            const requestData = sendingData.request;
            const responseData = sendingData.response;

            expect(requestData.body.name).to.be.eq(validUserData.userFourth.name);
            expect(requestData.body.email).to.be.eq(validUserData.userFourth.email);
            expect(requestData.body.service).to.be.eq(validUserData.userFourth.service);
            expect(requestData.body.accountPurpose).to.be.eq(validUserData.userFourth.accountPurpose);
            expect(requestData.body.withdrawOptions).to.deep.eq(validUserData.userFourth.withdrawOptions);
            expect(requestData.body.message).to.be.eq(validUserData.userFourth.message);

            expect(responseData.statusCode)
            expect(responseData.statusCode, 'Status code should be 200').to.eq(200);
        });

    });

});