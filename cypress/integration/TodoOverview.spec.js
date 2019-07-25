describe("Todo overview suite", function() {
  beforeEach(() => {
    //cy.visit("/");
  });

  it("Initial list loading", function() {
    cy.server();
    cy.route("GET", "/todos", "fixture:todos").as("load");
    cy.visit("/");    

    cy.wait("@load").then(() =>
      cy.get("#TodoList li").should("have.length", 2)
    );
  });

  it("Load list 2", function() {
    cy.loadApp();
    cy.wait("@load").get("#TodoList li").should("have.length", 2);    
  });
  
});
