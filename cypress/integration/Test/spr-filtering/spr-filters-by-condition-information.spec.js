/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Test case for condition information', () => {
    it('Verify when user choose condition report check box in condition information filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyConditionInformation()
    })
})