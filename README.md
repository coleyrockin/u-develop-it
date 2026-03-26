# U Develop It

RESTful API for an online voting application built with Express.js and MySQL — with full CRUD operations and Jest test coverage.

![Express](https://img.shields.io/badge/Express-000?style=flat&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

---

## About

U Develop It is a back-end API that powers a developer voting platform. Candidates can be added, voters can register, and votes are cast through a clean set of RESTful endpoints. Built with Express.js for routing, MySQL2 for the database layer, and Jest for automated testing of every route and query.

## Features

- Full RESTful API with GET, POST, PUT, DELETE
- Relational database with candidates, parties, and voters
- Parameterized SQL queries via MySQL2
- Input validation and error handling middleware
- Automated test suite with Jest
- Modular route structure

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Server | Express.js |
| Database | MySQL2 |
| Testing | Jest |
| Runtime | Node.js |

## Getting Started

### Prerequisites

- Node.js >= 14
- MySQL installed and running
- npm

### Installation

```bash
git clone https://github.com/coleyrockin/u-develop-it.git
cd u-develop-it
npm install
```

### Database Setup

```bash
mysql -u root -p < db/db.sql
mysql -u root -p < db/schema.sql
mysql -u root -p < db/seeds.sql
```

### Run

```bash
npm start
```

### Test

```bash
npm test
```

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/candidates` | Get all candidates |
| GET | `/api/candidate/:id` | Get single candidate |
| POST | `/api/candidate` | Add a candidate |
| DELETE | `/api/candidate/:id` | Remove a candidate |
| GET | `/api/voters` | Get all voters |
| POST | `/api/voter` | Register a voter |
| PUT | `/api/voter/:id` | Update voter info |
| POST | `/api/vote` | Cast a vote |

## Project Structure

```
├── __tests__/         # Jest test suites
├── db/                # SQL schema, seeds, and connection
├── routes/apiRoutes/  # Express route handlers
├── utils/             # Input validation helpers
├── server.js          # Entry point
└── package.json
```

---

Built by [Boyd Roberts](https://github.com/coleyrockin)
