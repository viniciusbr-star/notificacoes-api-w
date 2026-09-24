# Registro de Testes Unitários

Aluno: Vinicius de Oliveira Silva
Grupo: Grupo 8
Data: 24/09/2026

## Testes escritos

| # | Arquivo | O que o teste verifica | Tipo |
| --- | ------- | ---------------------- | ---- |
| 1 | tests/unit/ambiente.test.js | `1 + 1` é igual a `2` (Jest configurado corretamente) | sucesso |
| 2 | tests/unit/validators.test.js | `isEmail("ana@senai.br")` retorna `null` (e-mail válido, sem erro) | sucesso |
| 3 | tests/unit/validators.test.js | `isEmail("ana.senai.br")` retorna "E-mail inválido" (falta o @) | falha |
| 4 | tests/unit/validators.test.js | `minLength("Ana", 3, "Nome")` retorna `null` (exatamente no mínimo é aceito) | borda |
| 5 | tests/unit/parseId.test.js | `parseId("abc")` lança `ValidationError` (id não é número) | falha |
| 6 | tests/unit/parseId.test.js | `parseId("12abc")` deveria lançar `ValidationError` | falha |

## Resultado

Passaram: 5 (ambiente + isEmail válido + isEmail sem @ + minLength borda + parseId "abc") <br>
Falharam: 1 (parseId "12abc")

## Defeito encontrado

Teste: `parseId` — "lança ValidationError quando o id mistura números e letras ("12abc")" </br>
Esperado: lançar `ValidationError`, pois "12abc" não é um id numérico válido </br>
Obtido: a função não lançou erro e retornou `12`. O `parseInt` lê os dígitos do começo da string e ignora o resto, e o código só verifica `isNaN`, então "12abc" passa como se fosse o id 12. 

## Cobertura

% Lines da linha "helpers": <b>55.55%</b> </br>
Em uma frase, o que esse número significa: <b> pouco mais da metade das linhas de código dos helpers foi executada pelos testes; o restante (ex.: `isRequired`, `isPositiveInteger`, `validar`) ainda não é testado por nenhum teste.</b>
