/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageSort } from "../../Page/publicAuctionSortPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Test case for condition grade sort', () => {
    it('Verify condition grade ascending', () => {
        navigateTo.publicAuctionPage()
        auctionPageSort.VerifyCRAsc()
    })
    it('Verify condition grade decrease', () => {
        navigateTo.publicAuctionPage()
        auctionPageSort.verifyCRDesc()
    })
})