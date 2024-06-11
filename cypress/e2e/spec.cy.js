describe('Login Page Tests', () => {
  const baseUrl = 'http://localhost:5173';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should load the login page', () => {
    cy.url().should('eq', `${baseUrl}/`);
  });

  it('should submit the form successfully and navigate to success page', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="terms"]').check();
    cy.get('button').should('not.be.disabled').click();

    cy.url().should('include', '/');
  });

  it('should show one error message when email is invalid', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="terms"]').check();
    
    cy.get('button').should('be.disabled');
    
    cy.get('.invalid-feedback').should('have.length', 1);
    cy.get('.invalid-feedback').contains('Please enter a valid email address');
  });

  it('should show two error messages when email and password are invalid', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('123');
    cy.get('input[name="terms"]').check();

    cy.get('button').should('be.disabled');

    cy.get('.invalid-feedback').should('have.length', 2);
    cy.get('.invalid-feedback').contains('Please enter a valid email address');
    cy.get('.invalid-feedback').contains('Password must be at least 4 characters long');
  });

  it('should disable button when terms are not accepted', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="terms"]').uncheck();

    cy.get('button').should('be.disabled');
  });
});
