/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for autocheck score', () => {
    it('Verify that when chooe score from autocheck score filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyAutocheckScore()
    })
})