## Getting Started

- `yarn`: install dependencies
- `yarn dev`: start all applications

**Helpful scrips**

- `yarn acceptance` - Runs end to end tests. Development server must be running.
- `yarn build` - Builds application for production.
- `yarn dev` - Runs application in development mode.
- `yarn db:generate` - Generates prisma client.
- `yarn db:migrate:dev` - Runs prisma migrations against database.
- `yarn lint` - Validates code preferences with eslint.
- `yarn start` - Starts production application.
- `yarn test` - Runs test suite.
- `yarn test:watch` - Runs test suite in watch mode.
- `yarn test:coverage` - Run test suite and collect test coverage.

## Project Structure

### Directories

- src/adapters: Adapters to access external resource connections.
- src/repositories: Access to external resources.
- src/resolvers: Graphql resolvers.
- src/schemas: Graphql type definitions.
- src/services: "Business" Logic.

### Acceptance Tests

Acceptance tests tests an individual end points logic via response with a given input. Acceptance tests hit the API in development mode.

- Each test should create and remove any necessary data for the test.
