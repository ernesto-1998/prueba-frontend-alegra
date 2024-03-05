# images_world_alegraApp

Este es un proyecto que permite buscar imagenes y asignarlas a los distintos vendedores que posea el usuario con las credenciales de la api de Alegra, para el buscador de imagenes se utiliza la API de Pixabay, y para toda la gestión de facturación y vendedores se utiliza la API de alegra.

## Validaciones

Primeramente se utiliza el campo "observations" de cada vendedor para guardar el puntaje, si este campo no existe o posee un valor que no es un entero, la aplicación de forma local le asignara un valor de 0 y lo enviara cuando sea escogido (sumandole 3). Existen más validaciones:
1. Si no hay vendedores se mandará en automático a una vista de NO-SELLERS (Igualmente si solo hay un vendedor registrado, ya que para que exista una carrera deben haber 2 como mínimo).
1. Si se trata de acceder a una vista que no existe se dispará en automatico la página de 404 not found.
1. Si la carrera ha terminado se mandará en automático a la página de dashboard donde estarán los resultados (Para reiniciar la carrera hay que borrar manualmente las facturas creadas y actualizar las observations de cada vendedor involucrado).
1. No se puede acceder de manera manual a la página de no-sellers si hay vendedores existentes.

## Caracteristicas

1. La App esta internacionalizada, es decir esta disponible en ingles y en español (Por defecto se carga en español, pero puede modificarse con el select del header).
1. Posee responsive design.

## Instrucciones

1. La vista de imagenes posee el marcador de cada vendedor en la card misma, pero para una vista más detallada y con más información puede acceder al dashboard por medio del boton "Score/Puntaje" presente en el header, este cargara la DashboardView donde se encuentra el puntaje de cada vendedor en orden descendente. Si la carrera ya ha terminado, la factura de venta será cargada en esta vista.

## Info Extra

1. Como pueden observar, la app esta hecha con vue puro, ya que al ser una prueba técnica decidi no usar ningún framework UI y hacer todo a mano, esto para que puedan ver mi forma de trabajar el css y los modulos de vue, y analizar que cosas puedo mejorar o consejos que me puedan dar.
1. El archivo con las variables de entorno no estará presente en el repositorio, más bien será adjuntado en el correo donde enviaré los links para acceder a la app desplegada.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
