describe("Zadanie 4", () => {
  it("test img", () => {
    cy.visit("https://nostalgic-davinci-50de64.netlify.app/");
    cy.get("img").each((item) => {
      cy.visit(item[0].currentSrc);
    });
  });
});
