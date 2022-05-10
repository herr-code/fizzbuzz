# :fireworks: Fizzbuzz

Este repo contiene el proyecto de actividad para la semana 4 de Backend NodeJs.  
Los temas vistos esta semana son:

- Código legado (modificaciones).
- Refactoring
- POO
- Creación de proyectos de js
- Versionamiento con git y GitHub
- Puebas de unidad
- GitHub Actions (en pruebas automatizadas)
- Linter
- Express
- Lectura de archivos json

## :pushpin: Requerimientos:

1. Refactorizar el script legado y rehacerlo con mucho cuidado ya que es información muy sensible.
2. Crea un API para usar la funcionalidad anterior:

| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/explorers/:mission` | `localhost:3000/v1/explorers/node` | Deberás obtener la lista de explorers en la misión que enviaste (node o java) |
| `localhost:3000/v1/explorers/amount/:mission` | `localhost:3000/v1/explorers/amount/node` | Deberás obtener la cantidad de explorers según la misión que enviaste (node o java) |
| `localhost:3000/v1/explorers/usernames/:mission` | `localhost:3000/v1/explorers/usernames/node` | Deberás obtener la lista de usernames en la misión que enviaste (node o java) |

3. Nuevo requerimiento: Crea un endpoint para recibir un número y aplicar la validación del fizzbuzz. (ESTO SE DEBE CREAR DESDE CERO)

## :chart: Desarrollo

1. Crear un proyecto de JS dentro de la carpeta `fizzbuzz` con las opciones por defecto:

```
npm init --yes
```

2. Inicializar un repositorio dentro de la carpeta `fizzbuzz`:

```
git init
```
3. Instalar las dependencias necesarias: `Express JS`, `Jest JS` y `Eslinter`:

```
npm install express --save
npm install --save-dev jest
npm install eslint --save-dev
```

5. El siguiente grafico representa la estructura de la solucíón:

## :open_file_folder: Estructura de carpetas

```
fizzbuzz
│   .eslintrc.js
│   .gitignore
│   explorers.json
│   package-lock.json
│   package.json
│   README.md   
│
└───github
│   └───workflows
│       │  test.yml
|
└───lib
│   └───controllerss
│   │   │  ExplorerController.js
│   │
│   └───services
│   │   │   ExplorerService.js
│   │   │   FizzbuzzService.js
│   │
│   └───utils
│   │   │   Reader.js
│   │
│   |   server.js
│   
└───test
│   └───controllerss
│   │   │  ExplorerController.test.js
│   │
│   └───services
│   │   │   ExplorerService.test.js
│   │   │   FizzbuzzService.test.js
│   │
│   └───utils
│       │   Reader.test.js

```

:tanabata_tree: Tecnologías usadas:

- Node v13.14.0
- Npm v6.14.4
- Git v2.31.1

:mag_right: Dependencias:

- Express ^4.18.1
- Jest ^28.0.3
- Eslint ^28.0.3
