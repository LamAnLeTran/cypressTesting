export class PublicAuctionPageSort {
  verifyCRAsc() {
    cy.get('[data-test-id="sorting"]').then((listArrangment) => {
      selectSortOption(listArrangment, 1);
      verifySortCRAsc();
    });
  }
  verifyCRDesc() {
    cy.get('[data-test-id="sorting"]').then((listArrangment) => {
    selectSortOption(listArrangment, 2);
    verifySortCRDesc();
    });
  }
  verifyYearAsc() {
    cy.get('[data-test-id="sorting"]').then((listArrangment) => {
    selectSortOption(listArrangment, 14);
    verifySortYearAsc();
    });
  }
  verifyYearDesc() {
    cy.get('[data-test-id="sorting"]').then((listArrangment) => {
    selectSortOption(listArrangment, 15);
    verifySortYearDesc();
    });
  }
}
function selectSortOption(name, index) {
  cy.get(name).select(index);
  cy.wait(2000);
}
function verifySortCRAsc(){
    var arr = [];
      cy.get("a.VehicleReportLink__condition-report-link")
        .should("be.visible")
        .each(($listing) => {
          cy.get($listing)
            .invoke("attr", "data-value-text")
            .then((cr) => {
              arr.push(cr);
            });
        })
        .then((checkIncrease) => {
          expect(isIncreasing(arr), arr).to.be.true;
        });
}
function verifySortCRDesc(){
    var arr = [];
      cy.get("a.VehicleReportLink__condition-report-link")
        .should("be.visible")
        .each(($listing) => {
          cy.get($listing)
            .invoke("attr", "data-value-text")
            .then((cr) => {
              arr.push(cr);
            });
        })
        .then((checkIncrease) => {
          expect(isIncreasing(arr), arr).to.be.false;
        });
}
function verifySortYearAsc(){
    cy.get('[data-test-id="listings"]')
        .find(
          '[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]'
        )
        .then((check) => {
          var arr = [];
          cy.wrap(check)
            .each((listItem) => {
              cy.wrap(listItem)
                .find('[data-test-id="year"]')
                .invoke("text")
                .then((year) => {
                  arr.push(Number(year));
                });
            })
            .then((checkIncrease) => {
              expect(isIncreasing(arr)).to.be.true;
            });
        });
}
function verifySortYearDesc(){
    cy.get('[data-test-id="listings"]')
        .find(
          '[class="SearchResultsDetailView__container sw_row NoInfiniteScrollerStyles"]'
        )
        .then((check) => {
          var arr = [];
          cy.wrap(check)
            .each((listItem) => {
              cy.wrap(listItem)
                .find('[data-test-id="year"]')
                .invoke("text")
                .then((year) => {
                  arr.push(Number(year));
                });
            })
            .then((checkIncrease) => {
              expect(isIncreasing(arr)).to.be.false;
            });
        });
}
export const auctionPageSort = new PublicAuctionPageSort();
var isIncreasing = (arr) => {
  return arr.every((v, i) => i === 0 || v >= arr[i - 1]);
};
