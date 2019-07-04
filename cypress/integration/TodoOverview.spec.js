describe("A suite", function() {
  beforeEach(() => {
    //cy.visit("/");
  });

  it.only("Initial list loading", function() {    
    cy.server();    
    cy.route("GET", "/todos", 'fixture:todos').as('load');
    cy.visit("/");
    
    cy.get('#TodoList li')
    .should('have.length',2);

    cy.wait('@load').then(()=>
    
    cy.get('#TodoList li')
      .should('have.length',2));
  });

  it("Load list upon button click using custom command", function() { 
    cy.visitAndLoad();    
    
    cy.get('#TodoList li')
      .should('have.length',2);
  });

  it("Load list - e2e", function() {     
    cy.visit("/");  
    cy.get('#loadTests')
      .click();
    
    cy.get('#TodoList li')     
      .should('have.length.of.at.least',1);
  });
});
