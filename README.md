![example workflow](https://github.com/jparadasb/mmk-assignament/actions/workflows/cypress.yml/badge.svg)

# Typing Skill Checker in React App

This application was built using React and follow the google style guideline

[https://typing-test.gh.paradas.co/](https://typing-test.gh.paradas.co/).

# Getting started

## To run the project

` yarn start`

## To build the project

`yarn build`

## to run e2e tests

` yarn cypress:open`

# Relevant directories

```
.
├── README.md
├── cypress
│   ├── integration
│   │   ├── config-form.spec.js
│   │   └── typing-test.spec.js
├── cypress.json
├── package.json
├── public
├── src
│   ├── components
│   ├── context
│   ├── reducers
```

# Tests

This projects have integration test with Cypress. Each test is located in `./cypress/integration` directory
