import { post } from 'axios';

post("https://65bb938b52189914b5bc8c0a.mockapi.io/data", {firstName: 'Fred', lastName: 'Pierrafeu'})
  .then(function (response) {
    return response 
  })
  .catch(function (error) {
    console.log(error);
  });