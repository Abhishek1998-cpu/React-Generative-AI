import React, { useState } from "react";
import axios from "axios";
import {
  MainWrapper,
  CustomButton,
  CustomTextarea,
  LoaderComponent,
  Form
} from "./AppStyles";

function App() {
  const [input, setInput] = useState("");
  const [testCase, setTestCase] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    generateTests(input)
      .then((response) => {
        const output = response.data.choices[0].text;
        setTestCase(output);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      {loading ? (
        <LoaderComponent />
      ) : (
        <MainWrapper>
          <div>
            <Form onSubmit={handleSubmit}>
              <p style={{ textAlign: "center" }}>
                Enter the code of the React Component in the input below.
              </p>
              <CustomTextarea
                placeholder="Enter Code Here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <CustomButton>Generate Testcases</CustomButton>
            </Form>
          </div>
          {testCase && (
            <div>
              <h2>Generated Test Case:</h2>
              <pre>{testCase}</pre>
            </div>
          )}
        </MainWrapper>
      )}
    </div>
  );
}

function generateTests(input) {
  const API_KEY = "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";
  const REQUEST_URL = "https://api.openai.com/v1/completions";

  const requestData = {
    model: "text-davinci-003",
    prompt: `Write 5 test case for the following React Component using Jest : \n ${input} \n`,
    temperature: 0,
    max_tokens: 1503,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  return axios.post(REQUEST_URL, requestData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
}
export default App;
