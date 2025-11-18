const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc
let reqURL = "https://superheroapi.com/api/eec7960de7d2b65f2128689ab06a0b35"
 
async function superhero(reqURL) {

 const response = 
 await fetch(reqURL);
  
    const data = await response.json()
  console.log(data); 
  return data;

}
let characterID = 1

let stats = `${reqURL}/${characterID}/powerstats`;

superhero(stats)
