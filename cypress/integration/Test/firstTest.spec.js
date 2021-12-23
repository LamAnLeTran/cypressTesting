// firstTest.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Testcase for Manheim filter', () => {
    it('Verify that when user choose a filter, that option will apear as a tag in filter section', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="Passenger"]').check().then(filterCheck => {   
            //Assert    
            cy.get('[data-test-id="breadcrumb-list"]').find('span').should('contain', 'Passenger')
        })
    })
    it('Verify that the number of result is the same with the number from the option filter', () => {
        //go to test page
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="Passenger"]').check().then(filterCheck => {       
            //cy.get('[data-test-id="breadcrumb-list"]').find('span').should('contain', 'Passenger')
            cy.contains('li', 'Passenger').find('[class="facet-value"]').then(lengthCheck =>{
                const length = lengthCheck.text().replace(/[()]/g,'')
                cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').should('have.length', length)
                cy.get('[class="ResultsCount__text"]').find('span').first().should('contain', length.toString())
            })
            
        })
        
    })
    it('Verify that when user choose "Make" from the filter the result will have the correct Make', () =>{
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="Chevrolet"]').check()
        cy.wait(5000)
        cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
            cy.wrap(checkMake).each(listItem => {
                cy.wrap(listItem).find('[data-test-id="make"]').should('contain', 'Chevrolet')
            })
        })
    })
    it('Verify that when the user choose a range of odometer the result will have correct with user option', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: odometer"]').then(odometer => {
            const odometerMin = 10000
            const odometerMax = 110000
            cy.wrap(odometer).click()
            cy.get('[data-test-id="start"]').type(odometerMin)
            cy.get('[data-test-id="end"]').type(odometerMax)
            cy.get('[data-test-id="Odometer-update-button"]').click()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {
                    cy.wrap(listItem).find('[data-test-id="odometer"]').then(getOdometer =>{
                        const odometer =  Number(getOdometer.text().replace(',', '').replace(/[^\d.-]/g, ''))                       
                        expect(odometer, 'odometer is in a range of 10,000 to 110,000').to.be.within(odometerMin,odometerMax)
                    })
                })
            })
        })
    })
    it('Verify conditon information filter', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: condition information"]').then(condition => {
            cy.wrap(condition).click()
            cy.get('[data-test-id="With Condition Report"]').check()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {
                    cy.wrap(listItem).find('[data-test-id="condition report"]').should('be.visible')
                })
            })
        })
    })
    it('Verify owner filter', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: owners"]').then(owner => {
            cy.wrap(owner).click()
            cy.get('[data-test-id="AutocheckOwnerCountFilter"]').select('1')
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {
                    cy.wrap(listItem).find('[data-test-id="owners"]').should('contain', 1)
                })
            })
        })
    })
    it('Verify accident report filter', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: accidents reported"]').then(accident => {
            cy.wrap(accident).click()
            cy.wrap(accident).find('.Dropdown__select').select('Accidents')
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {
                    cy.wrap(listItem).find('[data-test-id="accidents"]').should('not.contain', 0)
                })
            })
        })
    })
    it('Verify autocheck score', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: autocheck score"]').then(autoCheckScore => {
            cy.wrap(autoCheckScore).click()
            cy.get('[data-test-id="range: bid or buy now price"]').then(form => {
                cy.wrap(form).find('[data-test-id="start"]').select('0')
                cy.wrap(form).find('[data-test-id="end"]').select('60')
                cy.wait(10000)
            })
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {
                    const score = Number(listItem.find('[data-test-id="score"]').text())
                    expect(score).to.be.within(0, 60)
                })
            })
        })
    })
    it('Verify Odometer Check', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: odometer check"]').then(odometer => {
            cy.wrap(odometer).click()
            cy.wrap(odometer).find('[data-test-id="OK"]').check()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {
                    cy.wrap(listItem).find('[data-test-id="odometer-data"]').find('div').eq(1).should('have.attr','data-test-id', 'odometer:-true')
                })
            })
        })
    })
    it('Verify title proplems check', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: title problem check"]').then(proplem => {
            cy.wrap(proplem).click()
            cy.wrap(proplem).find('[data-test-id="OK"]').check()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {
                    cy.wrap(listItem).find('[data-test-id="title-prob"]').find('div').eq(1).should('have.attr','data-test-id', 'titles/probs:-true')
                })
            })
        })
    })
    it('Verify Use/event check', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: use event check"]').then(event => {
            cy.wrap(event).click()
            cy.wrap(event).find('[data-test-id="OK"]').check()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {             
                    cy.wrap(listItem).find('[data-test-id="use-event-data"]').find('div').eq(1).should('have.attr','data-test-id', 'use/event:-true')
                })
            })
        })
    })
    it('Verify Cadian vehicles', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: canadian vehicles"]').then(cadian => {
            cy.wrap(cadian).click()
            cy.wrap(cadian).find('select').select('T')
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {             
                    cy.wrap(listItem).find('.previous-canadian__img').should('be.visible')
                })
            })
        })
    })
    it('Verify energy type', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: engine type"]').then(type => {
            cy.wrap(type).click()
            cy.wrap(type).find('[data-test-id="4 Cylinder"]').check()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {             
                    cy.wrap(listItem).find('[data-test-id="engine-type"]').should('contain', '4')
                })
            })
        })
    })
    it('Verify exterior color', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: exterior color"]').then(color => {
            cy.wrap(color).click()
            cy.wrap(color).find('[data-test-id="Black"]').check()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                cy.wrap(checkMake).each(listItem => {             
                    cy.wrap(listItem).find('[data-test-id="exterior color name"]').should('contain', 'Black')
                })
            })
        })
    })
    it('Verify door count', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: door count"]').then(door => {
            cy.wrap(door).click()
            cy.wrap(door).find('[data-test-id="start"]').select('1')
            cy.wrap(door).find('[data-test-id="end"]').select('5')
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').each((listItem, index) => {
                cy.get('[data-test-id="vdp-link"]').eq(index).click().then(link => {
                    cy.get('[data-test-id="overview-container"]')
                        .find('[class="dont-break-columns "]')
                        .eq(5)
                        .find('[class="dd collapsible-bottom-value"]')
                        .invoke('text')
                        .then(numberDoor => {
                            expect(Number(numberDoor)).to.be.lessThan(6)
                            cy.go('back')
                            cy.wait(2000)
                        })
                })
            })
        })
    })
    it('Verify drive train', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: drive train"]').then(drive => {
            cy.wrap(drive).click()
            cy.wrap(drive).find('[data-test-id="4 Wheel Drive"]').check()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').each((listItem, index) => {
                cy.get('[data-test-id="vdp-link"]').eq(index).click().then(link => {
                    cy.get('[data-test-id="overview-container"]')
                        .find('[class="dont-break-columns "]')
                        .eq(4)
                        .find('[class="dd collapsible-bottom-value"]')
                        .invoke('text')
                        .then(numberWheel => {
                            expect(numberWheel).to.be.contain('4 Wheel Drive')
                            cy.go('back')
                            cy.wait(2000)
                        })
                })
            })
        })
    })
    it('Verify frame damage', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: frame damage"]').then(fram => {
            cy.wrap(fram).click()
            cy.wrap(fram).find('select').select('T')
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').each((listItem, index) => {
                cy.get('[data-test-id="vdp-link"]').eq(index).click().then(link => {
                    cy.get('[data-test-id="frame-damage"]')
                        .find('span')
                        .eq(1)
                        .should('contain', 'Yes')
                    cy.go('back')
                    cy.wait(2000)                       
                })
            })
        })
    })
    it('Verify fuel type', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: fuel type"]').then(fuel => {
            cy.wrap(fuel).click()
            cy.wrap(fuel).find('[data-test-id="Ethanol"]').check()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').each((listItem, index) => {
                cy.get('[data-test-id="vdp-link"]').eq(index).click().then(link => {
                    cy.get('[data-test-id="overview-container"]')
                        .find('[class="dont-break-columns "]')
                        .eq(8)
                        .find('[class="dd collapsible-bottom-value"]')
                        .invoke('text')
                        .then(fuelType => {
                            expect(fuelType).to.be.contain('Ethanol')
                            cy.go('back')
                            cy.wait(2000)
                        })
                })
            })
        })
    })
    it('Verify vehicle type', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="filter: vehicle type"]').then(type => {
            cy.wrap(type).click()
            cy.wrap(type).find('[data-test-id="Passenger"]').check()
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').each((listItem, index) => {
                cy.get('[data-test-id="vdp-link"]').eq(index).click().then(link => {
                    cy.get('[data-test-id="overview-container"]')
                        .find('[class="dont-break-columns "]')
                        .eq(6)
                        .find('[class="dd collapsible-bottom-value"]')
                        .invoke('text')
                        .then(numOfSeat => {
                            expect(Number(numOfSeat)).to.be.greaterThan(1)
                            cy.go('back')
                            cy.wait(2000)
                        })
                })
            })
        })
    })
})
