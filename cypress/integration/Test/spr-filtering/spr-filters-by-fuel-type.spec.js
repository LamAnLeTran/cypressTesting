/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for fuel type filter', () => {
    it('Verify that when choose a option from fuel type, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyFuelType()
    })
})