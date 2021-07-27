/// <reference types="cypress" />

describe("Main", () => {
    it("should show a list of products", () => {
        cy.visit("/");
        cy.get("[data-test-id=product-item]");
    });

    it("clicking on a product should navigate to that products page", () => {
        cy.visit("/");
        cy.get("[data-test-id=product-item]").first().click();
        cy.url().should('include', '/product/1');
        cy.get("[data-test-id=product-page-header]");
    });

    it("product page should show a list of reviews", () => {
        cy.visit("/product/1");
        cy.get("[data-test-id=product-page-header]");
        cy.get("[data-test-id=product-review-1]");
        cy.get("[data-test-id=product-review-2]");
    });
})