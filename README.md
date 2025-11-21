# Backend Bootcamp – JavaScript & TypeScript Lab

Laboratorio correspondiente al módulo **JavaScript / TypeScript** del Bootcamp de Backend.

El objetivo de este proyecto es resolver los ejercicios prácticos de lógica, estructuras de datos y tipado en ambos lenguajes sin usar frameworks, enfocándose en las buenas prácticas de programación funcional e inmutabilidad.

---

## Estructura del Proyecto

```bash
backend-js-ts-lab/
├── src/
│   ├── data/        # Datos
│   ├── js/        # Ejercicios en JavaScript
│   │   ├── ex01-fromCSV.js
│   │   ├── ex02-replaceAt.js
│   │   ├── ex03-winnerByYear.js
│   │   ├── ex04-normalize.js
│   │   └── ex05-compact.js
│   └── ts/        # Ejercicios en TypeScript
│       ├── ex01-students.ts
│       ├── ex02-user-union.ts
│       ├── ex03-type-guards.ts
│       ├── ex04-filterStudents.ts
│       └── ex05-swap.ts
├── types/          # Tipos
├── test/          # Tests con Vitest
├── dist/          # Archivos compilados (TS → JS)
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
```

---

## Requisitos

- **Node.js ≥ 20**
- **pnpm ≥ 9** (recomendado)
- Docker (opcional, para ejecución aislada)

---

## Instalación

```bash
# Clonar el repositorio
git clone git@github.com:<tu-usuario>/backend-js-ts-lab.git
cd backend-js-ts-lab

# Instalar dependencias
pnpm install
```

---

## Scripts Disponibles

| Comando        | Descripción                                              |
| -------------- | -------------------------------------------------------- |
| `pnpm js`      | Ejecuta los ejercicios en JavaScript (`src/js/index.js`) |
| `pnpm dev:ts`  | Ejecuta los ejercicios en TypeScript con `ts-node`       |
| `pnpm build`   | Compila TypeScript a JavaScript en `dist/`               |
| `pnpm start`   | Ejecuta el código compilado (`dist/ts/index.js`)         |
| `pnpm test`    | Ejecuta los tests de Vitest en modo consola              |
| `pnpm test:ui` | Ejecuta los tests en modo interactivo/UI                 |

---

## Testing

Los ejercicios pueden probarse individualmente desde el archivo `test/js.spec.ts`

o agregando nuevos archivos de test por ejercicio.

Ejemplo:

```bash
pnpm test
```

---

## Ejecución con Docker (opcional)

```bash
docker build -t backend-js-ts-lab .
docker run --rm backend-js-ts-lab
```

---

## Notas

- Todos los ejercicios deben implementarse sin mutar estructuras originales.
- Se recomienda usar **spread operator**, **destructuring**, y **métodos funcionales** (`map`, `filter`, `reduce`, etc.).
- En TypeScript, aplicar tipado estricto, uniones y genéricos según el ejercicio.

---

## Licencia

Este proyecto es de uso educativo.

Este proyecto es de uso educativo.
2025 — Cesar Poumian
Bootcamp Backend - LemonCode
