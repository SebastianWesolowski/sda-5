describe("Zadanie 3", () => {
  it("test href", () => {
    cy.visit("https://vigorous-sammet-faf911.netlify.app/");
    cy.get("nav ul li a").each((item) => {
      cy.visit(item[0].href);
    });
  });
});
