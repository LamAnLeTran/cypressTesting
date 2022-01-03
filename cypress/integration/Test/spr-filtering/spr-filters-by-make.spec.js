/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Tescase for filter by Make', () => {
    it('Verify that when user choose "Chervolet" from the Make filter the result will have the correct Make', () =>{
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyMakeFilter()
    })
})