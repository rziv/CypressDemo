describe("Todos store", function() {
  it("is defined", () => {
    cy.visit("/");
    cy.window()
      .its("todoStore")
      .should("not.be.undefined");
  });

  it("stores a new todo", () => {
    


    cy.window()
    .its("todoStore")
    .its("todos").as("todosArray")
    .should("have.length", 3);

    
    cy.window()
      .its("todoStore")
      .then(store=>store.addTodo("Hi Foo"));
     
    cy.window()
      .its("todoStore")
      .its("todos")
      .should("have.length", 4);
  });
});
