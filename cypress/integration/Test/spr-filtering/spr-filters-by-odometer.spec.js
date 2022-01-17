/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for odometer filter', () => {
    it('Verify that when the user choose a range of odometer the result will have correct with user option', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyOdometerFilter()
    })
})