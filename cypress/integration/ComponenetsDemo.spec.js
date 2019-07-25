const citiesResponse = {
    "Data": {
      "ListName": "City",
      "List": [
        {
          "RowNumber": "2",
          "city_code": "472",
          "city_name_he": "אבו גוש",
          "city_name_en": "ABU GHOSH",
          "CouncilCode": "11",
          "DistrictCode": "0"
        },
        {
          "RowNumber": "3",
          "city_code": "473",
          "city_name_he": "אבו סנאן",
          "city_name_en": "ABU SINAN",
          "CouncilCode": "24",
          "DistrictCode": "0"
        },
        {
          "RowNumber": "4",
          "city_code": "935",
          "city_name_he": "ירושלים",
          "city_name_en": "JERUSALEM",
          "CouncilCode": "62",
          "DistrictCode": "0"
        },
        {
          "RowNumber": "5",
          "city_code": "958",
          "city_name_he": "רמת השרון",
          "city_name_en": "RAMAT HASHARON",
          "CouncilCode": "62",
          "DistrictCode": "0"
        },
        {
          "RowNumber": "6",
          "city_code": "1042",
          "city_name_he": "רמת גן",
          "city_name_en": "RAMAT GAN",
          "CouncilCode": "62",
          "DistrictCode": "0"
        },
        {
          "RowNumber": "7",
          "city_code": "932",
          "city_name_he": "תל אביב",
          "city_name_en": "TEL AVIV",
          "CouncilCode": "62",
          "DistrictCode": "0"
        }
      ]
    },
    "ResponseCode": 0,
    "ResponseText": "Sucsses"
  }
  

describe("Components Demo Suite", ()=> {
    it ("load form", ()=> {
        cy.server();
        cy.route("POST", "https://esb.gov.il/govServiceList/ListProvider/GetList", 
        (xhr)=> { 
            console.log("xhr request:",xhr);
            console.log("xhr type:", typeof xhr);
                return  citiesResponse
                 
        }).as('cities');
        cy.visit("https://govforms.gov.il/mw/forms/componentsDemo@test.gov.il");        
        cy.wait(2000);
        cy.get("#SignCheckbox").as('UnLockFirstTab');
        cy.get('@UnLockFirstTab').check({force:true});
        cy.get('#SimpleSelect').select('תייר');
        cy.get('#SimpleText').type('אבי');        
        cy.get('#SimpleDate').type('11111970');
        cy.get('[type="file"]').then(elem=> elem.val('c:\\temp\\t.png'));
        cy.get('label[for="SimpleCheckbox"]').click();
        cy.get('[for="dynamicRadio1"]').click();       
        cy.get('#Autocomplete').type('רמת ');       
        cy.get('div.ui-menu-item-wrapper').should('have.length',2)        
        cy.get('ul.ui-autocomplete').contains('רמת גן');
        cy.get('#Autocomplete').type('גן');
        cy.get('#DateWithoutCalendar').type('11111975');
        cy.get('#SimpleTextArea').type('hello world')
        cy.get('#nextTab').click();

    })
})