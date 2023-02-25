import React, { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [testCase, setTestCase] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    generateTests(input)
      .then((response) => {
        const output = response.data.choices[0].text;
        setTestCase(output);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          React component:
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
        </label>
        <button type="submit">Generate Tests</button>
      </form>
      {testCase && (
        <div>
          <h2>Generated Test Case:</h2>
          <pre>{testCase}</pre>
        </div>
      )}
    </div>
  );
}
function generateTests(input) {
  const API_KEY = "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";
  const REQUEST_URL =
    "https://api.openai.com/v1/completions";

  const requestData = {
    "model": "text-davinci-003",
    "prompt": `Write 5 test case for the following React Component using Jest : \n ${input} \n`,
    temperature: 0,
    max_tokens: 1503,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  return axios.post(REQUEST_URL, requestData, {
    headers: {
      "Content-Type": "application/json", 
      Authorization: `Bearer ${API_KEY}`
    }
  });
}
export default App;
