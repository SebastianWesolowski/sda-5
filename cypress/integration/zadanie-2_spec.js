describe("Zadanie 2", () => {
  it("lokalizacje elementów form", () => {
    cy.visit("https://quizzical-hoover-f1f4c2.netlify.app/");
    cy.get("form").should("have.length", 4);
  });
});
