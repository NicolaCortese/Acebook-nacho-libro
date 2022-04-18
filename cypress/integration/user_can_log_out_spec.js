describe("Logout", ()=> {
    it("can logout", ()=>{
    
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    //sign out
    cy.visit("/posts");
    cy.get("#link-button").click();
    cy.url().should("include", "/sessions/new");


    })
})