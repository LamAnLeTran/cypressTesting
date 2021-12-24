/// <reference types="cypress" />

import { navigateTo } from "../Page/navigationPage"
import { auctionPageFilter } from "../Page/publicAuctionFilterPage"



Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('Testcase for Manheim filter', () => {
    beforeEach('Open Home Page Manheim', () => {
        cy.visit('/')
    })
    it('Verify that when user choose a filter, that option will apear as a tag in filter section', () => { 
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyTagFilterOption()
    })
    it('Verify that the number of result is the same with the number from the option filter', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyNumberOfResult()
        
    })
    it('Verify that when user choose "Make" from the filter the result will have the correct Make', () =>{
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyMakeFilter()
    })
    it('Verify that when the user choose a range of odometer the result will have correct with user option', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyOdometerFilter()
    })
    it('Verify conditon information filter', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyConditionInformation()
    })
    it('Verify owner filter', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyOwner()
    })
    it('Verify accident report filter', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyAccidentReport()
    })
    it('Verify autocheck score', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyAutocheckScore()
    })
    it('Verify Odometer Check', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyOdometerCheck()
    })
    it('Verify title proplems check', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyProplemCheck()
    })
    it('Verify Use/event check', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyUseOrEventCheck()
    })
    it('Verify Cadian vehicles', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyCadianVehicle()
    })
    it('Verify engine type', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyEngineType()
    })
    it('Verify exterior color', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyExteriorClor()
    })
    it('Verify door count', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyDoorCount()
    })
    it('Verify drive train', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyDriveTrain()
    })
    it('Verify frame damage', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyFrameDamge()
    })
    it('Verify fuel type', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyFuelType()
    })
    it('Verify vehicle type', () => {
        navigateTo.publicAuctionPage()
        auctionPageFilter.verifyVehicleType()
    })
})
