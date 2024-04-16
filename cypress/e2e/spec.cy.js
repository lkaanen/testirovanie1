describe('Cypress Tests', () => {
  it('None-existent login test', () => {
  cy.fixture('cypressTest').then(data => {
  cy.log('Переход на страницу авторизации')
  cy.visit(data.main_url)
  
  cy.log('Кнопка вход');
  cy.get('[href="/login"] > .button')
  .click()
  
  cy.log('');
  cy.get('.form-input--text')
  .type(data.login)
  
  cy.get('.form-input--password')
  .type(data.password)
  
  cy.get(':nth-child(3) > .button')
  .click()
  })
  });
  });