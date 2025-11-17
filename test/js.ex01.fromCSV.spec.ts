import { describe, it, expect } from "vitest";
import { fromCSV } from "../src/js/ex01-fromCSV.js";

const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg`;

describe("fromCSV", () => {
  it("parsea todas las filas en objetos", () => {
    const res = fromCSV(data);
    expect(res).toHaveLength(2);
    expect(res[0]).toMatchObject({
      id: "15519533",
      name: "Raul",
      surname: "Flores",
    });
  });

  it("preserva ceros a la izquierda", () => {
    const res = fromCSV(data);
    expect(res[1].id).toBe("05298880");
  });

  it("limita atributos con nAttrs", () => {
    const res = fromCSV(data, 2);
    expect(Object.keys(res[0])).toEqual(["id", "name"]);
  });

  it("ignora líneas vacías al final", () => {
    const res = fromCSV(data + "\n");
    expect(res).toHaveLength(2);
  });
});
