# TrindadeTrivia

Trindade Trivia is a simple trivia game that is built as a full-stack app. The client side is built with **TypeScript, React, SCSS,** and **Apollo**. The server side implements **Node.js, Express**, and **GraphQL**.

[![My Skills](https://skillicons.dev/icons?i=vite,ts,react,scss,apollo,nodejs,express,graphql&perline=4)](https://skillicons.dev)

## Tech Stack

**Apollo** is used for the client side to communicate with a _GraphQL API_, while having features as _local state management_ and _cache handler_.
**Express** together with **GraphQL** is used to create a GraphQL API endpoint.

## Development Goals

- Build the application end to end.
- Utilize Apollo as a state management library and communicate with a GrapQL API.
- Implement an API using Express and GraphQL to manage local data.

## Start locally

1 - Clone the repository

2 - Run `npm install` inside both `./client` and `./server` directories.

3 - For development, run `npm run dev` inside both `./client` and `/server` directories to start each project.

4 - `.env` files are required for both projects. The server side you need `PORT` and `NODE_ENV` variables. The client-side you need the `VITE_GRAPHQL_SCHEMA` variable that should be the server graphql endpoint (`localhost:PORT/graphql`) for the `code-gen`.
