describe("google", () => {
  it("input", () => {
    cy.visit("https://www.google.com");
    cy.get(`[title="Search"]`).type("fake@email.com");
    cy.get(`[title="Search"]`).should("have.value", "fake@email.com");
    cy.get(`[title="Search"]`).type("{enter}");
  });
});
