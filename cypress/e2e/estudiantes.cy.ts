describe('Gestor de Estudiantes E2E', () => {

  it('debería crear y actualizar un estudiante', () => {
    cy.visit('/crear');

    cy.get('input[name=nombre]').type('Pedro');
    cy.get('input[name=email]').type('pedro@test.com');
    cy.get('input[name=edad]').type('20');
    cy.get('input[name=telefono]').type('111222333');
    cy.contains('Guardar').click();

    cy.contains('Estudiante creado correctamente');

    cy.visit('/editar/1');
    cy.get('input[name=telefono]').clear().type('999888777');
    cy.contains('Guardar').click();

    cy.contains('Estudiante actualizado correctamente');
  });

});
