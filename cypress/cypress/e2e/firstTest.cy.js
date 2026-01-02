describe("template spec", () => {
  it("type", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email").type("fake@email.com");
    cy.get(".action-email").should("have.value", "fake@email.com");
  });

  it("submit", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-email").type("fake@email.com");
    cy.get(".action-email").should("have.value", "fake@email.com");

    cy.get(".action-form").find('[type="text"]').type("HALFOFF");

    // cy.get(".action-form").submit();
    cy.contains("Submit").click();
    cy.contains("Your form has been submitted!").should("have.length", 1);
    cy.contains("Submit").click();
    cy.get(".action-form")
      .next()
      .should("contain", "Your form has been submitted!");
    cy.contains("Your form has been submitted!").should("have.length", 1);
  });
});
