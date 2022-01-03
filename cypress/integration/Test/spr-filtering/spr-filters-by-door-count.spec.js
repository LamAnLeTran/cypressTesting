/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for door count filter', () => {
    it('Verify that when choose number of door from door count filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyDoorCount()
    })
})