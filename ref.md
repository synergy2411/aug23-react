# What is JavaScript?

- Client side / Browser
- Dynamic Language
- Form Validation
- DOM Manipulation
- Single Threaded
- Asynchronous
- Non Blocking
- ES5 (2009)
- ES6 / ES2015 (2015) -> ES7 -> ES8 -> ES9 -----> 2089
  > Arrow function
  > Rest / Spread Operator
  > Block scoping
  > Destructuring
  > Class
  > Map / Set
  > Template literals "" | '' | `${}`
  > Promise API
  > Fetch API
  > Generators

# MEAN / MERN

- MongoDB : NoSQL Database; JSON format
- Express : Web framework (JavaScript)
- Angular/React : Client side JavaScript
- Node : Server side platform (JavaScript - Server Side Script)

- JavaScript Engine executes
  > All Sync Task
  > All the Async Task
      - Microtask > after macrotask
      - Macrotask > execute first (Promise, queueMacrotask)

# JavaScript Engine

-> Creational Phase : memory is allocated - undefined
-> Executional Phase : assignments and return statements

# Data Types

- Primitive : String, Number, Boolean
- Object Types / Reference Types : Objects, Arrays, Functions, Date

---

# Webpack : module bundler

# Babel : Transpiler to convert ES6+ to ES5

Typescript

# to generate package.json

> npm init -y

# webpack dependencies

> npm install webpack webpack-cli -D

> npm run build

# to load CSS files

> npm install style-loader css-loader -D

# to install babel dependency -

> npm install @babel/core @babel/preset-env babel-loader -D

# to create HTML file dynamically

> npm install html-webpack-plugin -D

# to install webpack-dev-server

> npm install webpack-dev-server -D

# to create tsconfig.json

- npx tsc --init

- create the scripts {"compile" : "tsc --watch"}

- npm run compile

# React - to render the UI quickly and efficiently

- 25-30kb
- M"V"C - View Part
- Side effects : XHR Call, State Management, Form Validation, Create SPA, 2 way data binding etc
- Virtual DOM : Diffing Algo as well as Reconciliation Process
- Diffing Algo
- XHR Call - fetch API, jquery, axios etc
- State Management - Redux pattern - Reduxjs Toolkit (RTK)
- Form Validation - react-hook-form, formik, yup etc
- Single Page App (SPA) - react-router-dom

# Angular - Framework - Enterprise level apps

- HttpClientModule
- AngularRouter
- Reactive/Template driven forms (FormsModule/ReactiveFormsModule)
- Services
- ElementRef/TemplateRef - DOM Manipulation
- Shadow DOM
- RxJS Library

# Atomic Design in Web Designing

- Atom : smallest unit. eg one button, one input field etc
- Molecules : comb of Atoms. eg searchbar -> one input field + one button
- Organism : comb of molecules. eg Navigation Bar -> Brand image, Various links, searchbar etc
- Template : comb of organism. eg Main section of App -> various sections -> multiple articles -> multiple blogs -> blockquotes and the authors
- Page : a web page

-> AlertBox Component -> Title, body, one button

> Success message
> Error Messages
> Warning

-> "Thinking in React way" - If the piece of code is reusable, make it a component
-> "Component Composition" - creating component by other components

# to create React boilerplate project

## to generate typescript project

> npx create-react-app first-app --template typescript

## to generate javascript project

> npx create-react-app first-app
> cd first-app
> npm start

# JSX

- Can't use JAvaScript reserved keywords
- JSX must have only one root element
- Can evalute any JavaScript Expression in curly braces( { } )

# to install bootstrap library

> npm install bootstrap

Short Circuit Operator - &&
