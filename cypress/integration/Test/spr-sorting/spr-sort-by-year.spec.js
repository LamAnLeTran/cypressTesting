/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageSort } from "../../Page/publicAuctionSortPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for year sort', () => {
    it('Verify year ascending', () => {
        navigateTo.publicAuctionPage()
        auctionPageSort.verifyYearAsc()
    })
    it('Verify year decrease', () => {
        navigateTo.publicAuctionPage()
        auctionPageSort.verifyYearDesc()
    })
})