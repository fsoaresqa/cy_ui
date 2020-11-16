/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que estou na página da Unimed", () => {
  cy.visit("/");
});

When("acesso o Guia de Médicos", () => {
  cy.get(":nth-child(2) > .descricao > a > .titulo-midia").click();
});

When("realizo uma pesquisa por médicos do Rio de Janeiro", () => {
  cy.get("#campo_pesquisa").type("Ortopedista");
  cy.get("#btn_pesquisar").click();
  cy.get('.selecione-rede > .css-1pcexqc-container > .css-t2flpr-control > .css-k71zgk').type("Rio de Janeiro" + "{enter}");

  cy.get('.selecione-plano > .css-1pcexqc-container > .css-t2flpr-control > .css-k71zgk').type("Rio de Janeiro" + "{enter}");

  cy.get(".margin-bottom > :nth-child(1) > input").check();

  cy.get(".btn-success").click();
});

Then("Visualizo médico com a especialidade {string}", (string) => {
  cy.get(
    "#resultado0 > .resultado-resumido > :nth-child(3) > :nth-child(2)"
  ).should("have.text", string);
});

And("cidade {string}", (string) => {
  cy.get(
    "#resultado0 > .resultado-resumido > #txt_endereco > :nth-child(1)"
  ).should("contain", string);
});

Then("Verifico as páginas 1, 2 e 3", () => {
  for (let linha = 0; linha < 20; linha++) {
    cy.get(`#resultado${linha} #txt_endereco p`).should("contain", "RJ");
    cy.get(`#resultado${linha} #txt_endereco p`).should(
      "not.contain",
      "São Paulo"
    );
  }

  //Ir para a página 2
  cy.get(".span12 > ul > :nth-child(4) > a").click();

  for (let linha = 0; linha < 20; linha++) {
    cy.get(`#resultado${linha} #txt_endereco p`).should("contain", "RJ");
    cy.get(`#resultado${linha} #txt_endereco p`).should(
      "not.contain",
      "São Paulo"
    );
  }

  //Ir para página 3
  cy.get(".span12 > ul > :nth-child(5) > a").click();

  for (let linha = 0; linha < 20; linha++) {
    cy.get(`#resultado${linha} #txt_endereco p`).should("contain", "RJ");
    cy.get(`#resultado${linha} #txt_endereco p`).should(
      "not.contain",
      "São Paulo"
    );
  }
});
