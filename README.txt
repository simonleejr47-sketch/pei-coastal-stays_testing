README.txt
CSCI 3172 — Lab 3

Student: Jiaran Li
CSID: B00997520
Render deployment URL: https://pei-coastal-stays.onrender.com
FCS GitLab repository: https://git.cs.dal.ca/jiaran/csci-3172

About this project

PEI Coastal Stays is a REST API that manages a catalog of Prince Edward
Island vacation rentals. It is built with Node.js and Express, keeps the
stay records in memory, and exposes four RESTful endpoints so a client can
list all stays, fetch one stay, create a new stay, and delete a stay.
Every request is logged by custom middleware, every POST payload is
validated before it is accepted, and all errors are handled by a
centralized error-handling middleware that returns clean JSON.

API endpoints

  GET    /api/items        Returns all stays (JSON: { count, items })
  GET    /api/items/:id    Returns one stay by id (404 if not found)
  POST   /api/items        Creates a stay from a JSON body (400 if invalid,
                           201 on success)
  DELETE /api/items/:id    Deletes a stay by id (404 if not found)

Validation rules (POST)

Required fields: name, region, category (non-empty strings); price
(positive number); guests (positive integer). Invalid payloads are
rejected with HTTP 400 and a JSON error body. Malformed JSON bodies and
bad :id values are also rejected with 400; unknown routes and missing
records return 404; unexpected server errors return 500.

Sources and citations

- The 8 initial stay records are based on real listings in Lab 2 and Lab 1
  from the public website https://peibestvacations.com/ (owned by the
  myself); business fields such as price and rating are demo values.
- Express.js (https://expressjs.com/) is the only runtime dependency.
- All code is original work written for this lab.

Justification

The server is split into separate files so each concern has its own home:
the route handlers only deal with HTTP, the validation middleware only
checks payload shape, the logger middleware only records requests, and
the data module owns the in-memory store. 

Deployment

- Render: create a new Web Service connected to the GitHub repository
  (or manual deploy). Build command: npm install. Start command:
  node server.js. The server reads PORT from the environment, which Render
  provides automatically.
  The live deployment is available at https://pei-coastal-stays.onrender.com 
  and the API can be tested.
