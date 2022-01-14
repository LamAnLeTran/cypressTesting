/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for frame damge filter', () => {
    it('Verify that when choose a option from frame damage filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyFrameDamage()
    })
})
