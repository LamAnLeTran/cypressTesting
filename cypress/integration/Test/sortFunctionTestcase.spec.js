/// <reference types="cypress" />

import { navigateTo } from "../Page/navigationPage"
import { auctionPageSort } from "../Page/publicAuctionSortPage"





Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Testcase for Manheim arrangment', () => {
    beforeEach('Open Home Page Manheim', () => {
        cy.visit('/')
    })
    it('Verify condition grade ascending', () => {
        navigateTo.publicAuctionPage()
        auctionPageSort.VerifyCRAsc()
    })
    it('Verify condition grade decrease', () => {
        navigateTo.publicAuctionPage()
        auctionPageSort.verifyCRDesc()
    })
    it('Verify year ascending', () => {
        navigateTo.publicAuctionPage()
        auctionPageSort.verifyYearAsc()
    })
    it('Verify year decrease', () => {
        navigateTo.publicAuctionPage()
        auctionPageSort.verifyYearDesc()
    })
})