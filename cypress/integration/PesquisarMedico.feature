
Feature: Pesquisar Médico

Como usuário, desejo realizar uma pesquisa
para que possa validar os resultados


Scenario: Realizar pesquisa de médicos no Rio de Janeiro
    Given que estou na página da Unimed 
    And acesso o Guia de Médicos
    When realizo uma pesquisa por médicos do Rio de Janeiro
    Then Visualizo médico com a especialidade 'Ortopedia e Traumatologia' 
    And cidade 'Rio de Janeiro'


 
Scenario: Validar páginas 1, 2, e 3 a NÃO apresentação do resultado com cidade São Paulo

    Given que estou na página da Unimed 
    And acesso o Guia de Médicos
    When realizo uma pesquisa por médicos do Rio de Janeiro
    Then Verifico as páginas 1, 2 e 3



