#language: pt
Funcionalidade: Pesquisar Médico
Como usuário, desejo realizar uma pesquisa
para que possa validar os resultados


Cenário: Realizar pesquisa de médicos no Rio de Janeiro

Dado  que acesse a página da Unimed em Guia de Médicos
Quando quando realiza uma pesquisa por médicos do "Rio de Janeiro" por "Ortopedia"
Então Visualizamos os médico com a especialidade 'Ortopedia e Traumatologia' e cidade do "Rio de Janeiro" com sucesso


Cenário: Validar páginas 1, 2, e 3 a NÃO apresentação do resultado com cidade São Paulo

Dado que acesse a página da Unimed em Guia de Médicos
Quando quando realiza uma pesquisa por médicos do "Rio de Janeiro"
Então verificamos que não consta a cidade "São Paulo" no resultado


