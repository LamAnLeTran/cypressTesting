/// <reference types="cypress" />

describe('sort function test',() =>{
    before(()=>{

        //cy.visit('https://www.manheim.com/')
        cy.visit('https://publicauction.manheim.com/locations/CINA?icid=CINA-PUBLIC#/results/e885dfae-d8b0-41b1-a6ae-cef9e2553fb5')

    })

    // go to test page from homepage
    it('go to page',() =>{
        // cy.contains('Manheim Locations').click()
        // cy.contains('U.S. Locations').click()
        // cy.contains('Manheim Cincinnati').click()
        // cy.contains('Public Auctions').click()
        // cy.contains('See Inventory').click()

    })

    it('sort test get lane run number',() =>{
        // select newlyListed
        cy.get('[data-test-id="sorting"]',{timeout: 10*1000}).select('newlyListed')

        // loop through each
        cy.get('[data-test-id*="simulcast-lane-run-number"]',{timeout: 10*1000}).each((item,index,list) =>{
            cy.log(item.text())
            
        })
        // cy.get('[data-test-id*="simulcast-lane-run-number"]',{timeout: 10*1000}).then((list)=>{
        //     const sorted = Cypress._.sortBy(list)
        //     expect(sorted).to.deep.equal(list)
        // })
        // cy.get('[data-test-id="listings"] div',{timeout: 20*1000}).each((item,index,list) =>{
        //     cy.log(list)
        // })

    })


    it.only('check filter Frame Damage true',() =>{
        // check Frame Damage bread crumb not visible
        cy.get('[title="Frame Damage"]', {timeout: 20*1000}).should('not.exist')

        // click on Frame Damage filter
        cy.get('[data-test-id="filter: frame damage"]',{timeout: 20*1000}).click()

        // select Frame Damage option
        cy.get('[name="hasFrameDamage"]',{timeout: 20*1000}).select('T')

        // check Frame Damage bread crumb is visible
        cy.get('[title="Frame Damage"]', {timeout: 20*1000}).should('exist')

        // loop through result element
        cy.wait(10*1000)
        cy.get('[data-test-id="vdp-link"]',{timeout: 20*1000})
        .then($data=>{
            const dataCount = $data.length
            for(let i=0;i<dataCount;i++){
                cy.get('[data-test-id="vdp-link"]',{timeout: 20*1000}).eq(i)
                .click()
                //check report
                cy.get('[class="Condition-Informationvalue collapsible-bottom-value"]')
                .should('have.text', 'Yes')
                cy.go('back')
            }
        })
        

    })

    it.only('check filter Frame Damage False',() =>{
        // check Frame Damage bread crumb not visible
        cy.get('[title="No Frame Damage"]', {timeout: 20*1000}).should('not.exist')

        // click on Frame Damage filter
        cy.get('[data-test-id="filter: frame damage"]',{timeout: 20*1000}).click()

        // select No Frame Damage option
        cy.get('[name="hasFrameDamage"]',{timeout: 20*1000}).select('F')

        // check No Frame Damage bread crumb is visible
        cy.get('[title="No Frame Damage"]', {timeout: 20*1000}).should('exist')

        // loop through result element
        cy.wait(10*1000)
        cy.get('[data-test-id="vdp-link"]',{timeout: 20*1000})
        .then($data=>{
            const dataCount = $data.length
            for(let i=0;i<dataCount;i++){
                cy.get('[data-test-id="vdp-link"]',{timeout: 20*1000}).eq(i)
                .click()
                //check report
                cy.get('[class="Condition-Informationvalue collapsible-bottom-value"]')
                .should('have.text', 'No')
                cy.go('back')
            }
        })

    })

    it('check filter Fuel TYpe Ethanol',() =>{
        // check Ethanol bread crumb not visible
        cy.get('div[title="Ethanol"]', {timeout: 20*1000}).should('not.exist')

        // click on fuel type filter
        cy.get('[data-test-id="filter: fuel type"]',{timeout: 20*1000}).click()

        // select Ethanol option
        cy.get('input[data-test-id="Ethanol"]',{timeout: 20*1000}).click()

        // check Ethanol bread crumb is visible
        cy.get('div[title="Ethanol"]', {timeout: 20*1000}).should('exist')

        // loop through result element
        cy.get('[data-test-id^="Simulcast.CINA"]',{timeout: 20*1000}).each(($el,index,list) =>{

            //click on report
            if(index==1){
                $el.click()
            }

            // check fuel type
        })

    })

    // filer filter: pickup state province
    // place holder Search Pickup State/Province
    // li tile OH - Ohio

    it('check filter: pickup state province search should have 0 result when input letter "a"',() =>{
        // check Ethanol bread crumb not visible
        //cy.get('div[title="Ethanol"]', {timeout: 20*1000}).should('not.exist')

        // click on filter: pickup state province
        cy.get('[data-test-id="filter: pickup state province"]',{timeout: 20*1000}).click()

        // input in place holder letter "a"
        cy.get('[placeholder="Search Pickup State/Province"]',{timeout: 20*1000}).clear().type('a')
        
        // check "OH = ohio" option not exist
        cy.get('li[title="OH - Ohio"]',{timeout: 20*1000}).should('not.exist')

        
    })

    it('check filter: pickup state province search should have 1 result when input letter "o"',() =>{
        // check Pickup: OH - Ohio bread crumb not visible
        cy.get('div[title="Pickup: OH - Ohio"]', {timeout: 20*1000}).should('not.exist')

        // click on filter: pickup state province
        cy.get('[data-test-id="filter: pickup state province"]',{timeout: 20*1000}).click()

        // input in place holder letter "o"
        cy.get('[placeholder="Search Pickup State/Province"]',{timeout: 20*1000}).clear().type('o')
        
        // check "OH = ohio" option exist
        cy.get('li[title="OH - Ohio"]',{timeout: 20*1000}).should('exist').click()

        // check Pickup: OH - Ohio bread crumb is visible
        cy.get('div[title="Pickup: OH - Ohio"]', {timeout: 20*1000}).should('exist')

        // loop through result element
        cy.get('[data-test-id^="pickup-location"]',{timeout: 20*1000}).each((item,index,list) =>{

            // check result text
            cy.wrap(item)
            .should('have.text','OH - Manheim Cincinnati')
        })
    })
})