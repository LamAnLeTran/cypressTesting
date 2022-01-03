/// <reference types="cypress" />
import { navigateTo } from "../../Page/navigationPage"
import { auctionPageFilter } from "../../Page/publicAuctionFilterPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Test case for vehicle type', () => {
    it('Verify that when chooes a option form vehicle type filter, the result will correct', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyVehicleType()
    })
})