/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/6466154687')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'test1')

  cy
    .get('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'milk2')

})