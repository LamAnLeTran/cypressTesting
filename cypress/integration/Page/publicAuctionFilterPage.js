/// <reference types="cypress" />
export class PublicAuctionPage {
    verifyMakeFilter() {
        cy.get('[data-test-id="Chevrolet"]').check()
        cy.wait(5000)
        cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
            cy.wrap(checkMake).each(listItem => {
                cy.wrap(listItem).find('[data-test-id="make"]').should('contain', 'Chevrolet')
            })
        })
    }
    verifyOdometerFilter() {
        cy.get('[data-test-id="filter: odometer"]').then(odometer => {
            const odometerMin = 10000
            const odometerMax = 110000
            click(odometer)
            verifyFilterOdometer(odometerMin, odometerMax)
        })
    }
    verifyConditionInformation() {
        cy.get('[data-test-id="filter: condition information"]').then(condition => {
            click(condition)
            verifyFilterConditionInformation()
        })
    }
    verifyOwner() {
        cy.get('[data-test-id="filter: owners"]').then(owner => {
            click(owner)
            verifyFilterOwner()
        })
    }
    verifyAccidentReport() {
        cy.get('[data-test-id="filter: accidents reported"]').then(accident => {
            click(accident)
            verifyFilterAccidentReport()
        })
    }
    verifyAutocheckScore() {
        cy.get('[data-test-id="filter: autocheck score"]').then(autoCheckScore => {
            click(autoCheckScore)
            selectScoreAutocheck()
            verifyFilterAutocheckScore()
        })
    }
    verifyOdometerCheck() {
        cy.get('[data-test-id="filter: odometer check"]').then(odometer => {
            click(odometer)
            verifyFilterOdometerCheck()
        })
    }
    verifyProblemCheck() {
        cy.get('[data-test-id="filter: title problem check"]').then(proplem => {
            click(proplem)
            verifyFilterProblemCheck()
        })
    }
    verifyUseOrEventCheck() {
        cy.get('[data-test-id="filter: use event check"]').then(event => {
            click(event)
            verifyFilterUseOrEventCheck()
        })
    }
    verifyCanadianVehicle() {
        cy.get('[data-test-id="filter: canadian vehicles"]').then(cadian => {
            click(cadian)
            verifyFilterCanadianVehicle()
        })
    }
    verifyEngineType() {
        cy.get('[data-test-id="filter: engine type"]').then(type => {
            click(type)
            verifyFilterEngineType()
        })
    }
    verifyExteriorColor() {
        cy.get('[data-test-id="filter: exterior color"]').then(color => {
            click(color)
            verifyFilterExteriorColor()
        })
    }
    verifyDoorCount() {
        cy.get('[data-test-id="filter: door count"]').then(door => {
            click(door)
            verifyFilterDoorCount()
        })
    }
    verifyDriveTrain() {
        cy.get('[data-test-id="filter: drive train"]').then(drive => {
            click(drive)
            verifyFilterDriveTrain()
        })
    }
    verifyFrameDamage() {
        cy.get('[data-test-id="filter: frame damage"]').then(frame => {
            click(frame)
            verifyFilterFrameDamage()
        })
    }
    verifyFuelType() {
        cy.get('[data-test-id="filter: fuel type"]').then(fuel => {
            click(fuel)
            verifyFilterFuelType()
        })
    }
    verifyVehicleType() {
        cy.get('[data-test-id="filter: vehicle type"]').then(type => {
            click(type)
            verifyFilterVehicleType()
        })
    }
}
function click(name) {
    cy.wrap(name).click()
}
function verifyFilterConditionInformation() {
    cy.get('[data-test-id="With Condition Report"]').check()
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('[data-test-id="condition report"]').should('be.visible')
        })
    })
}
function verifyFilterOdometer(odometerMin, odometerMax) {
    cy.get('[data-test-id="start"]').type(odometerMin)
    cy.get('[data-test-id="end"]').type(odometerMax)
    cy.get('[data-test-id="Odometer-update-button"]').click()
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('[data-test-id="odometer"]').then(getOdometer => {
                const odometer = Number(getOdometer.text().replace(',', '').replace(/[^\d.-]/g, ''))
                expect(odometer, 'odometer is in a range of 10,000 to 110,000').to.be.within(odometerMin, odometerMax)
            })
        })
    })
}
function verifyFilterOwner() {
    cy.get('[data-test-id="AutocheckOwnerCountFilter"]').select(2)
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('[data-test-id="owners"]').should('contain', 2)
        })
    })
}
function verifyFilterAccidentReport() {
    cy.get('[data-test-id="filter: accidents reported"]').find('.Dropdown__select').select(1)
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('[data-test-id="accidents"]').should('not.contain', 0)
        })
    })
}
function selectScoreAutocheck() {
    cy.get('[data-test-id="range: bid or buy now price"]').then(form => {
        cy.wrap(form).find('[data-test-id="start"]').select(1)
        cy.wrap(form).find('[data-test-id="end"]').select(7)
        cy.wait(10000)
    })
}
function verifyFilterAutocheckScore() {
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            const score = Number(listItem.find('[data-test-id="score"]').text())
            expect(score).to.be.within(0, 60)
        })
    })
}
function verifyFilterOdometerCheck() {
    cy.get('[data-test-id="filter: odometer check"]').find('[data-test-id="OK"]').check()
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('[data-test-id="odometer-data"]').find('div').eq(1).should('have.attr', 'data-test-id', 'odometer:-true')
        })
    })
}
function verifyFilterProblemCheck() {
    cy.get('[data-test-id="filter: title problem check"]').find('[data-test-id="OK"]').check()
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('[data-test-id="title-prob"]').find('div').eq(1).should('have.attr', 'data-test-id', 'titles/probs:-true')
        })
    })
}
function verifyFilterUseOrEventCheck() {
    cy.get('[data-test-id="filter: use event check"]').find('[data-test-id="OK"]').check()
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('[data-test-id="use-event-data"]').find('div').eq(1).should('have.attr', 'data-test-id', 'use/event:-true')
        })
    })
}
function verifyFilterCanadianVehicle() {
    cy.get('[data-test-id="filter: canadian vehicles"]').find('select').select(1)
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('.previous-canadian__img').should('be.visible')
        })
    })
}
function verifyFilterEngineType() {
    cy.get('[data-test-id="filter: engine type"]').find('[data-test-id="4 Cylinder"]').check()
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('[data-test-id="engine-type"]').should('contain', '4')
        })
    })
}
function verifyFilterExteriorColor() {
    cy.get('[data-test-id="filter: exterior color"]').find('[data-test-id="Black"]').check()
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
        cy.wrap(checkMake).each(listItem => {
            cy.wrap(listItem).find('[data-test-id="exterior color name"]').should('contain', 'Black')
        })
    })
}
function verifyFilterDoorCount() {
    cy.get('[data-test-id="filter: door count"]').find('[data-test-id="start"]').select(1)
    cy.get('[data-test-id="filter: door count"]').find('[data-test-id="end"]').select(5)
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
}
function verifyFilterDriveTrain() {
    cy.get('[data-test-id="filter: drive train"]').find('[data-test-id="4 Wheel Drive"]').check()
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
}
function verifyFilterFrameDamage() {
    cy.get('[data-test-id="filter: frame damage"]').find('select').select(1)
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
}
function verifyFilterFuelType() {
    cy.get('[data-test-id="filter: fuel type"]').find('[data-test-id="Gasoline"]').check()
    cy.wait(5000)
    cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').each((listItem, index) => {
        cy.get('[data-test-id="vdp-link"]').eq(index).click().then(link => {
            cy.get('[data-test-id="overview-container"]')
                .find('[class="dont-break-columns "]')
                .eq(8)
                .find('[class="dd collapsible-bottom-value"]')
                .invoke('text')
                .then(fuelType => {
                    expect(fuelType).to.be.contain('Gasoline')
                    cy.go('back')
                    cy.wait(2000)
                })
        })
    })
}
function verifyFilterVehicleType() {
    cy.get('[data-test-id="filter: vehicle type"]').find('[data-test-id="Passenger"]').check()
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
}
export const auctionPageFilter = new PublicAuctionPage()
