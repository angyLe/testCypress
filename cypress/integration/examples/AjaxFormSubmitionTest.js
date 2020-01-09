context('Testing of ajax form submition', () => {

    beforeEach(() => {
        cy.visit('https://www.seleniumeasy.com/test/ajax-form-submit-demo.html')
    })

    const clickSubmitBtn = (cy) => cy.get("#btn-submit").click();

    it('It should no be displayed success message, when required fields are not provided', () => {

        // form has only one required field and one otional.
        cy.get("#description").type('Some description');

        cy.pause();

        clickSubmitBtn(cy);

        cy.get("form").contains('Form submited Successfully!').should('not.be.visible');

    });

    it('It should be displayed success message, when all required valid fields are provided', () => {

        // form has only one required field and one otional.
        cy.get("#title").type('Some title');

        clickSubmitBtn(cy);

        cy.get("form").contains('Form submited Successfully!').should('be.visible');

    });

})






