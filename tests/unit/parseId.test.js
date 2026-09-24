// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
  // Para testar ERRO, o expect recebe uma função: () => ...
  it("lança ValidationError quando o id não é número", () => {
    expect(() => parseId("abc")).toThrow(ValidationError);
  });

  // DESAFIO: "12abc" não é um id válido, então deveria ser rejeitado
  it('lança ValidationError quando o id mistura números e letras ("12abc")', () => {
    expect(() => parseId("12abc")).toThrow(ValidationError);
  });
});
