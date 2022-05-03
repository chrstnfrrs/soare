# Soare

This is the soare project.

[![Format](https://github.com/chrstnfrrs/soare/actions/workflows/format.yaml/badge.svg)](https://github.com/chrstnfrrs/soare/actions/workflows/format.yaml) [![Lint](https://github.com/chrstnfrrs/soare/actions/workflows/lint.yaml/badge.svg)](https://github.com/chrstnfrrs/soare/actions/workflows/lint.yaml) [![Tests](https://github.com/chrstnfrrs/soare/actions/workflows/test.yaml/badge.svg)](https://github.com/chrstnfrrs/soare/actions/workflows/test.yaml) [![Coverage](https://github.com/chrstnfrrs/soare/actions/workflows/coverage.yaml/badge.svg)](https://github.com/chrstnfrrs/soare/actions/workflows/coverage.yaml) [![Acceptance](https://github.com/chrstnfrrs/soare/actions/workflows/acceptance.yaml/badge.svg)](https://github.com/chrstnfrrs/soare/actions/workflows/acceptance.yaml)

## Getting Started

- `yarn`: install dependencies
- `yarn dev`: start all applications

**Helpful scrips**

- `yarn format`: format all applications with prettier.
- `yarn lint`: validate code preferences with eslint.
- `yarn test`: run test suite.
- `yarn coverage`: run test suite with coverage output.
- `yarn acceptance`: run end to end tests. **Dev server must be running**

## Apps and Packages

- `api`: Apollo GraphQL Server
- `db`: Dockerized postgres used for local development
- `web`: [Next.js](https://nextjs.org) app
- `lint`: `eslint` configurations
- `utils`: Utility functions shared across applications

### Useful Links

**Turborepo:**

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
