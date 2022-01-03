export class NavigationPage{
    publicAuctionPage(){
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.get('[data-test-id="filter: vehicle type"]').should('be.visible')
    }
}
export const navigateTo = new NavigationPage()