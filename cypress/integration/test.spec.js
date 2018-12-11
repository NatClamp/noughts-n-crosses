describe('Tic Tac Toe Functionality', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/TicTacToe/');
  });
  it('adds an X to the div when clicked', () => {
    cy.get('#one').click();
    cy.get('#one').contains('X');
  });
  it('adds an O when clicked second time', () => {
    cy.get('#one').click();
    cy.get('#two').click();
    cy.get('#two').contains('O');
  });
  it('gives an alert when a div is clicked twice', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get('#one').click();
    cy.get('#one')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Choose another square');
      });
  });
  it('successfully alerts when winning condition is met', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get('#one').click();
    cy.get('#six').click();
    cy.get('#two').click();
    cy.get('#five').click();
    cy.get('#three')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('You Win! Congratulations!');
      });
  });
});
