describe("aSad", () => {

    it("afsq", () => {
        cy.visit("https://linkedin.com");
        cy.get('[action-type="ACCEPT"]').click();
        cy.get('#session_key').type("gianni.pristavu@gmail.com");
        cy.get('#session_password').type("curcudel123");
        cy.get('.justify-between > .btn-md').click();
        cy.get('#ember17').should('exist');
    })
}) 