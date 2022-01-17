/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for Cadian vehicles', () => {
    it('Verify when choose a option from Cadian vehicles filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyCanadianVehicle()
    })
})
