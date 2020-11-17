/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
Given("que acesse a página da Unimed em Guia de Médicos", () => {
  cy.visit("/")
  cy.get(":nth-child(2) > .descricao > a > .titulo-midia").click();
})


When("quando realiza uma pesquisa por médicos do {string} por {string}", (cidade, especialidade) => {
  cy.get("#campo_pesquisa").type(especialidade);
  cy.get("#btn_pesquisar").click();
  cy.get('.selecione-rede > .css-1pcexqc-container > .css-t2flpr-control > .css-k71zgk').type(cidade + "{enter}");
  cy.wait(1000)
  cy.get('.selecione-plano > .css-1pcexqc-container > .css-t2flpr-control > .css-k71zgk').type(cidade + "{enter}");

  cy.get(".margin-bottom > :nth-child(1) > input").check();

  cy.get(".btn-success").click();
});



Then("Visualizamos os médico com a especialidade {string} e cidade do {string} com sucesso", (especialidade, cidade ) => {
  cy.get(
    "#resultado0 > .resultado-resumido > :nth-child(3) > :nth-child(2)"
  ).should("have.text", especialidade);
  cy.get('#resultado0 > .resultado-resumido > #txt_endereco').contains(cidade)
});


When("quando realiza uma pesquisa por médicos do {string}", (cidade) => {
  cy.get("#campo_pesquisa").type(cidade);
  cy.get("#btn_pesquisar").click();
  cy.get('.selecione-rede > .css-1pcexqc-container > .css-t2flpr-control > .css-k71zgk').type(cidade + "{enter}");

  cy.get('.selecione-plano > .css-1pcexqc-container > .css-t2flpr-control > .css-k71zgk').type(cidade + "{enter}");

  cy.get(".margin-bottom > :nth-child(1) > input").check();

  cy.get(".btn-success").click();
});


Then("verificamos que não consta a cidade {string} no resultado", (cidadesp) => {
  for (let linha = 0; linha < 20; linha++) {
    cy.get(`#resultado${linha} #txt_endereco p`).should("contain", "RJ");
    cy.get(`#resultado${linha} #txt_endereco p`).should("not.contain", cidadesp);
  }

  //Ir para a página 2
  cy.get(".span12 > ul > :nth-child(4) > a").click();

  for (let linha = 0; linha < 20; linha++) {
    cy.get(`#resultado${linha} #txt_endereco p`).should("contain", "RJ");
    cy.get(`#resultado${linha} #txt_endereco p`).should("not.contain", cidadesp);
  }

  //Ir para página 3
  cy.get(".span12 > ul > :nth-child(5) > a").click();

  for (let linha = 0; linha < 20; linha++) {
    cy.get(`#resultado${linha} #txt_endereco p`).should("contain", "RJ");
    cy.get(`#resultado${linha} #txt_endereco p`).should("not.contain", cidadesp);
  }
})
})