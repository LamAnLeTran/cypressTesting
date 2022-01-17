/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for accident report filter', () => {
    it('Verify that choose "Accident" from accident report filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyAccidentReport()
    })
})