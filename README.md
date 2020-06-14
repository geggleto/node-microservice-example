# Example Account Microservice

This project is an example of how to build a HTTP based microservice using basic event sourcing. 

Usage using Docker using Docker-Compose.

## Usage

`yarn go` calls docker-compose build/up

Docker configured to use Nodemon to listen for local changes so you don't need to rebuild. Only time you need to rebuild
is when you are adding dependencies.

## End-Points

The app defines 2 end-points

- `GET /account/:accountId`

- `POST /account`

An account is represented by 2 fields, `accountId`, `email`. It is easily extensible.

## Folder structure

The app exposes 4 main categories:

- Aggregates - Defines entities/data
- Handlers - Handles HTTP layer traffic
- Repositories - Handles Storage operations
- Services - Handles data-fetch operations

Aggregates are basic models of data, currently theres an example in Account that just reduces all values into a projection.
It would be better to apply events, each event type has a mapping to a function that applies the event to the aggregate.

Handlers return an Express Handler function while wrapping its dependencies. It would be better to have a dependency 
container but that's not required for so little end-points.

## Insomnia Collection

See `Insomnia_*.json` for workspaces.
