context('Testing of Contact form fields', () => {
    const errorColor = "rgb(220, 53, 69)";
    const validColor = "rgb(40, 167, 69)";

    beforeEach(() => {
        cy.visit('https://getbootstrap.com/docs/4.4/examples/checkout')
    })

    const clickContinueBtn = (cy) => {
        cy.contains('Continue to checkout')
            .click();
    }

    describe('First name field tests', () => {
        const firsNameElementId = "#firstName";
        const errorMessageNameIsRequired = "Valid first name is required";

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

            clickContinueBtn(cy);

            cy.get(firsNameElementId)
                .should('have.css', 'border-color', validColor)

        });


        /* 
            Strings should not contain blank spaces at the start or at the end after it was added. 
            It is problematic to sort such strings. 
            Truncation of the string could be done on the server side.
            After string is added and if it is displayed somewhere on the page, 
            it could be performed a test to check presence of leading and trailing whitespaces.
        */
        it.skip('Input field text should be truncated', () => {

            cy.get(firsNameElementId)
                .type(' Mary')

            // test this somehow
           
        });

    })

    describe('Email field tests', () => {
        const emailElementId = "#email";
        const errorMessageEmailIsInvalid = "Please enter a valid email address for shipping updates";

        const checkFieldIsValid = (cy) => cy.get(emailElementId).should('have.css', 'border-color', validColor);
        const checkErrorMessageIsVisible = (cy) => cy.contains(errorMessageEmailIsInvalid).should('be.visible');

        it('It should be displayed error message when value has no @ and domain', () => {

            cy.get(emailElementId)
                .type('a')

            clickContinueBtn(cy);

            checkErrorMessageIsVisible(cy);

        });

        it('Input field should have red border when invalid email is provided', () => {

            cy.get(emailElementId)
                .type('a')

            clickContinueBtn(cy);

            cy.get(emailElementId)
                .should('have.css', 'border-color', errorColor)

        });

        it('It should be displayed error message when value has no user name', () => {

            cy.get(emailElementId)
                .type('@gmail.com')

            clickContinueBtn(cy);

            checkErrorMessageIsVisible(cy);

        });

        it('It should be displayed error message when encoded html within email is provided', () => {

            cy.get(emailElementId)
                .type('Mary Black <maryblack@gmail.com>')

            clickContinueBtn(cy);

            checkErrorMessageIsVisible(cy);

        });

        it('It should be displayed error message when @ character provided twice', () => {

            cy.get(emailElementId)
                .type('mary@black@gmail.com')

            clickContinueBtn(cy);

            checkErrorMessageIsVisible(cy);

        });

        it('It should be displayed error message when multiple dots in the domain is provided', () => {

            cy.get(emailElementId)
                .type('black@gmail..com')

            clickContinueBtn(cy);

            checkErrorMessageIsVisible(cy);

        });


        // positive testing
        it('Input field should contain provided valid email', () => {

            cy.get(emailElementId)
                .type('some@gmail.com')

            clickContinueBtn(cy);

            checkFieldIsValid(cy);

        });


        it('Input field should have green border when valid email is provided', () => {

            cy.get(emailElementId)
                .type('some@gmail.com')

            clickContinueBtn(cy);

            checkFieldIsValid(cy);

        });

        it('Input field should be valid when email username contains a dot ', () => {

            cy.get(emailElementId)
                .type('some.some@gmail.com')

            clickContinueBtn(cy);

            checkFieldIsValid(cy);

        });

        it('Input field should be valid when email domain contains a dot with subdomain ', () => {

            cy.get(emailElementId)
                .type('some.some@subdomain.gmail.com')

            clickContinueBtn(cy);

            checkFieldIsValid(cy);

        });

        it('Input field should be valid when email contains dash in username part', () => {

            cy.get(emailElementId)
                .type('some-some@subdomain.gmail.com')

            clickContinueBtn(cy);

            checkFieldIsValid(cy);

        });


    })
})


context('Testing of Contact ', () => {
    const errorColor = "rgb(220, 53, 69)";
    const validColor = "rgb(40, 167, 69)";

})



