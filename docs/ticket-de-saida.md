# Ticket de Saída — Atividade 05

Aluno: Vinicius de Oliveira Silva
Grupo: Grupo 8
Data: 15/10/2026

## 1. Por que os testes de integração usam um banco separado do banco da API?

Pra não bagunçar os dados da API. O teste grava e apaga coisa de verdade no banco (o `limparBanco` esvazia as tabelas antes de cada teste), então se fosse o mesmo banco eu ia perder os dados que estava usando. Com o `notificacoes_test` cada teste começa com o banco vazio e não depende de nada que já estava lá.

## 2. No Assert, por que buscamos o registro de novo no banco, em vez de conferir o objeto que o service devolveu?

Porque o objeto que o service devolve é só o que tá na memória, não prova que foi salvo. O service pode devolver algo certo e nem ter gravado, ou devolver `undefined`. Buscando de novo com o `findByPk` eu vejo o que realmente está no banco, que é o que o teste quer garantir.

## 3. A rota `PUT /participantes/:id` responde 200. O que o seu teste do desafio mostrou sobre ela?

Que o 200 engana. Meu teste esperava `"Ana Maria"` no banco e veio `"Ana"`, ou seja, o nome novo não foi salvo. Fui ver e o `ParticipanteService.atualizar` ainda é só um `// TODO`, não faz nada e retorna `undefined`. Aí a rota responde 200 com corpo vazio, o usuário acha que atualizou e a alteração se perde. Só deu pra descobrir porque o teste olhou o banco.
