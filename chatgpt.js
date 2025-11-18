const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc
let reqURL = "https://api.openai.com/v1/responses"
qes = prompt("Input your request:")
 
async function ChatAI() {

const options = { method: 'POST',
    headers: {
      Authorization: 'Bearer ' + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        model:"gpt-4.1",
        input: qes

    }
    )
  };
  const response = await fetch(reqURL, options);{

  const data = await response.json()
  console.log(data.output[0].content[0].text); 
  return data;
}
}
ChatAI()
