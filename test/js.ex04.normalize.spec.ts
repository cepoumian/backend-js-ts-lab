import { describe, it, expect } from "vitest";
import { normalize } from "../src/js/ex04-normalize.js";
import { collection } from "../src/data/ex04-normalize.data.js";

describe("normalize", () => {
  it("convierte un array de objetos en un objeto indexado por id", () => {
    const result = normalize(collection);
    const sample = collection[0];

    // la clave debe existir
    expect(result).toHaveProperty(sample.id);

    // y su valor no debe contener la id
    expect(result[sample.id].id).toBeUndefined();
    expect(result[sample.id]).toMatchObject({
      nationality: sample.nationality,
      language: sample.language,
      capital: sample.capital,
      national_sport: sample.national_sport,
      flag: sample.flag,
    });
  });

  it("devuelve un objeto vacío si el array está vacío", () => {
    expect(normalize([])).toEqual({});
  });
});
