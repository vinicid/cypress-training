/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/6466154687')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy=list]')
    // .eq(0)
    .contains('test1')
    .get('[data-cy=list]')
    // .eq(0)
    .contains('milk2')
});
