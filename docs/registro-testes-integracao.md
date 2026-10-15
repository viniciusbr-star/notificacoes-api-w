# Registro de Testes de Integração

Aluno: Vinicius de Oliveira Silva <br>
Grupo: Grupo 8 <br>
Data: 15/10/2026 <br>

## Banco de teste

<b> Nome do banco de teste:</b> notificacoes_test<br>
<b> Por que ele é separado do banco da API (uma frase):</b> Porque os testes apagam e recriam dados a cada execução (`limparBanco`), e isso destruiria os dados reais da API se rodassem no mesmo banco.

## Testes escritos

| #   | Arquivo                                           | O que o teste verifica                                                                                             | Verde ou vermelho? |
| --- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------ |
| 1   | tests/integration/evento.integration.test.js      | `EventoService.criar` grava o evento no banco e o nome gravado é o mesmo informado ("Semana de Tecnologia")        | Verde              |
| 2   | tests/integration/participante.integration.test.js | `ParticipanteService.criar` recusa e-mail inválido (sem @) e nenhum participante é gravado (`count` = 0)          | Verde              |
| 3   | tests/integration/participante.integration.test.js | `ParticipanteService.atualizar` grava o nome novo ("Ana Maria") no banco ao atualizar um participante existente   | Vermelho           |

## Resultado

Linha "Tests:" da saída do npm run test:integration:

```
Tests:       1 failed, 5 passed, 6 total
```

(Os 5 testes verdes incluem os 3 que já existiam no projeto + os testes 1 e 2; o 1 vermelho é o teste do desafio.)

## Defeito encontrado

<b> Teste:</b> `ParticipanteService.atualizar (integração) › grava o nome novo no banco` <br>
<b> Esperado:</b> `"Ana Maria"` <br>
<b> Obtido: </b> `"Ana"` (o nome antigo continuou no banco) <br>
<b> O que o usuário da API veria (a rota responde 200, mas...):</b> O `PUT /participantes/:id` responde 200, porém nada é alterado: o nome continua o antigo e o corpo da resposta vem vazio, pois `ParticipanteService.atualizar` ainda é um stub (`// TODO`) que não busca nem atualiza o participante e retorna `undefined`. O usuário acha que salvou, mas a alteração é perdida.
