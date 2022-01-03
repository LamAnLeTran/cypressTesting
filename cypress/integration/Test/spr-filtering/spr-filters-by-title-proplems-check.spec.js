/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for Title/Proplems check', () => {
    it('Verify that when choose "OK" from Title/Proplems check, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyProplemCheck()
    })
})