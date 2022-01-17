/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for odometer check', () => {
    it('Verify that when choose "OK" from Odometer Check, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyOdometerCheck()
    })
})