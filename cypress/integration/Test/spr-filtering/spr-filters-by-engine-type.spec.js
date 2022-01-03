/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Test case for engine type filter', () => {
    it('Verify that when choose a option form engine type, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyEngineType()
    })
})