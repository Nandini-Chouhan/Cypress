# Cypress Lenskart automation
### To run this project on local
- Your local machine must have node installed 
- Clone this project on your machine
- Run **npm install**
- Used xpath, so install xpath plugin by running **npm install -D cypress --xpath**
- Update the credential in **fixture/testdata.json** file
- then to run the test use command **npm run test**
  

## NOTE: cypress is not supporting condition testing so we are not able to identify when we are going to get product update alert so there might be possibilities some test show flaky behaviour on the first run but when we re-kick the test it will going to pass.
- for reference [condition testing doc](https://docs.cypress.io/guides/core-concepts/conditional-testing#Error-Recovery)
