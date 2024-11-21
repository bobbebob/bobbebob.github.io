import React, { useState } from "react";
import styled from "styled-components";
import { API_KEY } from "../constants.ts";

const PageTitle = styled.div`
  margin-bottom: 3.5rem;
  margin-top: 1rem;
  p {
    margin-top: 1rem;
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 3rem;
`;
const TopFields = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const Field = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid var(--text-secondary);
  border-radius: 8px;
  background-color: var(--background);
`;
const BodyField = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 0.6rem;
  border: 1px solid var(--text-secondary);
  border-radius: 8px;
  background-color: var(--background);
`;
const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: max-content;
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 8px;
  margin-left: auto;
  background-color: var(--text-secondary);
  color: var(--text-primary);
  cursor: pointer;
  span {
    font-size: var(--fluid-14-18);
  }
`;

const Honeypot = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", API_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully 🎉");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <PageTitle>
        <h1>Contact me</h1>
        <h2>Say hi, if you'd like</h2>
        {result ? <p>{result}</p> : <></>}
      </PageTitle>
      <FormContainer onSubmit={onSubmit}>
        <TopFields>
          <Field type="text" name="name" placeholder="Name" required />
          <Field
            type="email"
            name="email"
            placeholder="Email@address.com"
            required
          />
        </TopFields>
        <BodyField
          name="message"
          placeholder="Hello Bob, have you heard about..."
          required
        />
        <Honeypot
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
        />
        <SubmitButton type="submit">
          <p>Send</p>
          <span className="material-icons">send</span>
        </SubmitButton>
      </FormContainer>
    </>
  );
};
export default ContactPage;
