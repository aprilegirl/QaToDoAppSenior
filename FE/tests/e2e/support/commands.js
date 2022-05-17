// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//

//creates the item
Cypress.Commands.add("createItem", (itemName) => {
    cy.get("input").type(itemName);
    cy.get('[data-testid="toDoButton"]').click();
})

//finds item Id based on the item Name
Cypress.Commands.add("findItemId", (itemName) => {
    cy.get('ul>li').contains(itemName + ' ').invoke('attr', 'data-id').then(($itemId) => {
        cy.wrap($itemId).as('foundItemId');
    });
})

//finds item Id based on ToDo Item position in the list
Cypress.Commands.add("findItemByPosition", (position) => {
    cy.get('ul>li').eq(position).invoke('attr', 'data-id')
        .then(($dataid) => {
            const dataid = $dataid
            cy.log(dataid);
        })
})

//logs item name
Cypress.Commands.add("findItemByName", (itemName) => {
    cy.get('[data-testid="toDoItem"]').invoke('attr', 'textContent')
        .then(($itemText) => {
            const itemText = $itemText
            cy.log(itemText)
        })
})

//deletes one item by ToDo text
Cypress.Commands.add("deleteByText", (itemToDelete) => {
    cy.get('ul>li').invoke('attr', 'textContent').contains(itemToDelete).find('button').click();
 });

//deletes the full list of items
Cypress.Commands.add("deleteAllItems", () => {
    cy.wait(100);//needed to load the page, possibly replace with page full load
    cy.get('#app').should("not.contain.text", "Empty list.")
    cy.get('[data-testid="removeButton"]').each(($button) => {
        cy.wrap($button).click();
    })
    
})

//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



