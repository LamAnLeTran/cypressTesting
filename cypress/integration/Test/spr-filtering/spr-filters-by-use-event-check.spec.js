/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for Use/Event filter', () => {
    it('Verify Use/event check', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyUseOrEventCheck()
    })
})