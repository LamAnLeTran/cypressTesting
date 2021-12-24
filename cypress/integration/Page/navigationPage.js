export class NavigationPage{
    publicAuctionPage(){
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
    }
}
export const navigateTo = new NavigationPage()