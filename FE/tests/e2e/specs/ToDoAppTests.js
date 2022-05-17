
describe('To Do App tests', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('verifies that the list is empty initially', () => {
        cy.get('#app').should("contain.text", "Empty list.")
    });

    it('creates two items, verifies list length, deletes one, verifies list length', () => {
        cy.createItem("Buy bananas");
        cy.get('ul>li:nth-last-child(1)').should("contain.text", "Buy bananas ");
        cy.get('ul>li').should('have.length', 1);

        cy.createItem("Feed cat");
        cy.get('ul>li').should('have.length', 2);

        cy.get('ul>:nth-last-child(1)').should("contain.text", "Feed cat ");
        cy.deleteByText("Feed cat");
        cy.get('[data-testid="toDoItem"]').should("not.contain.text", "Feed cat ");
        cy.get('ul>li').should('have.length', 1);

    });

    it("verifies the list is not empty, deletes every item in the list", () => {
        cy.deleteAllItems();
        cy.get('#app').should("contain.text", "Empty list.")
    })
});


   
    
  