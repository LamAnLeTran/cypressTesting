/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for exterior color filter', () => {
    it('Verify that when chooes a color form exterior color filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyExteriorColor()
    })
})