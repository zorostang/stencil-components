## run json-server with a global install or use npx
`npx json-server --watch db.json`

### For plural endpoints, JSON Server generates the following routes:
* GET /questions returns all questions
* GET /questions/1 returns questions with ID 1
* POST /questions creates a new questions in the database
* PUT /questions/1 updates the entire questions object for ID 1
* PATCH /questions/1 updates specific fields for the questions object with ID 1
* DELETE /questions/1 deletes a specific questions object