import React, { useRef, useState } from "react";
import styled from "styled-components";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { formSparkFormId, hCaptchaSiteKey } from "../constants.ts";

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
  const captchaRef = useRef<HCaptcha>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (captchaRef.current) {
      captchaRef.current.execute();
    }
  };

  const onVerifyCaptcha = (token: string) => {
    submitForm(token);
  };

  const submitForm = async (token: string) => {
    // Null check for formRef
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formData.append("h-captcha-response", token);

      try {
        setResult("Sending form...");
        const response = await fetch(
          `https://submit.formspark.io/f/${formSparkFormId}`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          setResult("Form Submitted Successfully 🎉");
          formRef.current.reset();
        } else {
          setResult("Submission failed. Please try again.");
        }
      } catch (error) {
        setResult("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <PageTitle>
        <h1>Contact me</h1>
        <h2>Say hi, if you'd like</h2>
        {result && <p>{result}</p>}
      </PageTitle>
      <FormContainer ref={formRef} onSubmit={onSubmit}>
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
          name="_honeypot"
          tabIndex={-1}
          autoComplete="off"
        />
        <HCaptcha
          ref={captchaRef}
          sitekey={hCaptchaSiteKey}
          onVerify={onVerifyCaptcha}
          size="invisible"
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
