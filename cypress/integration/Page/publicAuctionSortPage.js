export class PublicAuctionPageSort{
    VerifyCRAsc(){
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
    }
    verifyCRDesc(){
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
    }
    verifyYearAsc(){
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
                    expect(isIncreasing(arr)).to.be.true
                })
            })
        })
    }
    verifyYearDesc(){
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
                    expect(isIncreasing(arr)).to.be.false
                })
            })
        })
    }
}
export const auctionPageSort = new PublicAuctionPageSort()
var isIncreasing = (arr) => {
    return (
      arr.every((v, i) => i === 0 || v >= arr[i - 1])
    );
  };