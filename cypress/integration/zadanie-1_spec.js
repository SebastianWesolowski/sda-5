describe("Zadanie 1", () => {
  it("test form", () => {
    cy.visit("https://mystifying-pare-7c4cb8.netlify.app");
    cy.get("#name").type("Adam");
    cy.get("#email").type("adam@wp.pl");
    cy.get("#message").type("AdamAdam AdamAdam");
    cy.get("[type='date']").type("2020-12-31");
    cy.get("#salary-true").check();
    cy.get("input[type='submit']").click();
  });
});
