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
> import "bootstrap/dist/css/bootstrap.min.css";

Short Circuit Operator - &&

# Class based component life cycle methods

- componentDidMount
- componentDidUpdate
- componentWillUnmount

# useEffect Flavours -

- useEffect(cb) : fire for every render of component
- useEffect(cb,[]) : (componentDidMount) cb will run ONLY at initial rendering of component
- useEffect(cb, [Dependencies]) : (componentDidUpdate) cb will run at initial rendering of component as well as whenever the dependency will change.
- useEffect(cb => cleanUpFn, [Dependencies]) :
  > cb will execute at initial rendering of component
  > dependency will change
  > cleanUp function will run
  > cb will run
  > cleanUp will also fire when the component is about to unload (componentWillUnmount)

# Points to remember

- Whenever new State is depend upon the previous State, always supply function in state changing method
- Changing state is always asynchronous
- Functional Comp : state change will re-render the complete component
- Class Based Comp : state change will only re-render the "render()" function.
- Prop-drilling : sending the data to nested child components

# State Management

- Component Level State : useState(), useReducer()
- Branch Level State : Context API; should NOT create more than 2 context ideally
- App Level State : JWT Token -> Redux

<ThemeContext.Provider>
<AuthContext.Provider>
<MyApp />
</AuthContext.Provider>
</ThemeContext.Provider>

# Forms

- Controlled : React manage the state of form element
- Uncontrolled : DOM manage the state of form element

# Hooks

- useState
- useEffect
- useRef
- useContext
- useReducer

- useCallback
- useMemo

useCallback(cb, []) === useMemo(() => cb, [])

# Single Page Application (SPA)

- npm install react-router-dom

# Routing Terminologies -

- BrowserRouter : createBrowserRouter()
- RouterProvider
- Nested Routing : children props
- error : ErrorElement Prop
- loader : loads the data before the page render
- action : <Form> component
- redirect : redirect the user
- json() : throw error
- outlet : provide the space to load the child component UI
- NavLink / Link : does not reload the browser
- useLoaderData() : consume the loader data in component
- useNavigate() : navigate the user programmatically
- useParams() : access the route parameter
- useSubmit() : to submit the form programmatically

# to install json-server

> npm install json-server -g
> Create db.json file in "data" folder outside "playground"
> run below command from "data" folder

- json-server --watch db.json --port=3030

- http://localhost:3030/posts
