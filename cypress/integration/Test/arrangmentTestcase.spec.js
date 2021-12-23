/// <reference types="cypress" />





Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Testcase for Manheim arrangment', () => {
    it('Verify condition grade down to up', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="sorting"]').then(listArrangment => {
            cy.wrap(listArrangment).select('conditionGradeAsc')
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                var arr = []
                    cy.wrap(checkMake).each(listItem => {
                        cy.wrap(listItem).find('[data-test-id="condition report"]').invoke('attr', 'data-value-text').then((number) => {
                            const num = Number(number)
                            arr.push(num)                                         
                        })                       
                    }).then(checkIncrese => {
                        expect(isIncreasing(arr)).to.be.true
                    })  
            })
        })
    })
    it('Verify condition grade up to down', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="sorting"]').then(listArrangment => {
            cy.wrap(listArrangment).select('conditionGradeDesc')
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(checkMake => {
                var arr = []
                    cy.wrap(checkMake).each(listItem => {
                        cy.wrap(listItem).find('[data-test-id="condition report"]').invoke('attr', 'data-value-text').then((number) => {
                            const num = Number(number)
                            arr.push(num)                                         
                        })                       
                    }).then(checkIncrese => {
                        expect(isIncreasing(arr)).to.be.false
                    })  
            })
        })
    })
    it('Verify year down to up', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="sorting"]').then(listArrangment => {
            cy.wrap(listArrangment).select('yearAsc')
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(check => {
                var arr = []
                cy.wrap(check).each(listItem => {
                    cy.wrap(listItem).find('[data-test-id="year"]').invoke('text').then(year => {
                        arr.push(Number(year))
                    })
                }).then(checkIncrese => {
                    expect(isIncreasing(arr), arr).to.be.true
                })
            })
        })
    })
    it('Verify year up to down', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
        cy.get('[data-test-id="sorting"]').then(listArrangment => {
            cy.wrap(listArrangment).select('yearDesc')
            cy.wait(5000)
            cy.get('[data-test-id="listings"]').find('[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]').then(check => {
                var arr = []
                cy.wrap(check).each(listItem => {
                    cy.wrap(listItem).find('[data-test-id="year"]').invoke('text').then(year => {
                        arr.push(Number(year))
                    })
                }).then(checkIncrese => {
                    expect(isIncreasing(arr), arr).to.be.false
                })
            })
        })
    })
    it.only('Verify odometer down to up', () => {
        cy.visit('/')
        cy.get('.uhf-user__locations').click()
        cy.contains('U.S. Locations').click()
        cy.contains('Manheim Cincinnati').click()
        cy.contains('Public Auctions').click()
        cy.contains('See Inventory').click()
        cy.wait(10000)
    })
})
var isIncreasing = (arr) => {
    return (
      arr.every((v, i) => i === 0 || v >= arr[i - 1])
    );
  };