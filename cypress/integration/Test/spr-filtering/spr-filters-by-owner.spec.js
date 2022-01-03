/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Test case for owner filter', () => {
    it('Verify that when choose number of owner from owner filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyOwner()
    })
})