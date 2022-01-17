/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for drive train filter', () => {
    it('Verify that when choose a option from drive train filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyDriveTrain()
    })
})