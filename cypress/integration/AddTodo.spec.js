/// <reference types="Cypress" />
describe("Add Todo", function() {
  
  const addTodo = (text = "foo") => {    
    cy.get(".new-todo").as("newTodo");   
    cy.get("@newTodo")
      .type(text).then(()=>{debugger;})
      .type("{enter}")

  };

  beforeEach(() => {  
    cy.visit("/");  
  });

  it("todo input is initially focused", function() {
    cy.focused().should("have.class", "new-todo");
  });

  it("Add new todo upon enter", function() {
    addTodo("Find out the meaning of life");
    cy.get("#TodoList > :last-child").should(
      "have.text",
      "Find out the meaning of life"
    );

    cy.get("@newTodo").should("have.value", "");
  });

  it("Dont delete existing todos upon adding a new one", function() {
    cy.visit("/");
    addTodo("Find out the meaning of life");

    //cy.get('#TodoList li')
    //.should('have.length',4);

    cy.get("#TodoList > :last-child").should(
      "have.text",
      "Find out the meaning of life"
    );   
  });
});
