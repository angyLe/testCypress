
context('Testing of Contact form fields', () => {
    beforeEach(() => {
        cy.visit('https://getbootstrap.com/docs/4.4/examples/checkout')
    })

    const clickContinueBtn = (cy) => {
        cy.contains('Continue to checkout')
            .click();
    }

    describe('First name testing', () => {
        const firsNameElementId = "#firstName";
        const errorMessageNameIsRequired = "Valid first name is required";
        const errorColor = "rgb(220, 53, 69)";
        const validColor = "rgb(40, 167, 69)";

        // negative testing
        it('It should be displayed error message when value is not provided', () => {

            clickContinueBtn(cy);

            cy.contains(errorMessageNameIsRequired)
                .should('be.visible');

        });

        it('Input field should have red border when invalid name is provided', () => {

            clickContinueBtn(cy);

            cy.get(firsNameElementId)
                .should('have.css', 'border-color', errorColor)

        });


        it('It should be displayed error message when value is blank space', () => {

            cy.get(firsNameElementId)
                .type(' ')

            clickContinueBtn(cy);

            cy.contains(errorMessageNameIsRequired)
                .should('be.visible');

        });

        // boundary test could be added if input has limits. 
        it.skip('It should be displayed error message when value length is more then a limit', () => {

            cy.get(firsNameElementId)
                .type('abcdefghijklmnopqastuvwxyz') //26 symbols

            clickContinueBtn(cy);

            cy.contains('First name must be no more then 20 characters')
                .should('be.visible');

        });


        // positive testing
        it('Input field should contain provided valid name', () => {

            cy.get(firsNameElementId)
                .type('Mary')

            clickContinueBtn(cy);

            cy.get(firsNameElementId)
                .should('have.value', 'Mary')

        });


        it('Input field should have green border when valid name is provided', () => {

            cy.get(firsNameElementId)
                .type('Mary')

            cy.contains('Continue to checkout')
                .click();

            cy.get(firsNameElementId)
                .should('have.css', 'border-color', validColor)

        });

    })

})
