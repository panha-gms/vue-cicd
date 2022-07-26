// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  it("Visits the app root url", () => {
    // cy.visit("/");
    // cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");

    cy.visit('https://www.saucedemo.com/');
    cy.contains("h4", "Accepted usernames are");


  });
});
