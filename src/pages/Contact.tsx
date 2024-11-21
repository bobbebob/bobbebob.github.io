import React, { useEffect, useRef, useState } from "react";
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

const CaptchaContainer = styled.div`
  margin-left: auto;
  iframe {
    border: 1px solid var(--text-secondary);
    border-radius: 8px;
  }
`;

const ContactPage = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [result, setResult] = useState<string>("");
  const [form, setForm] = useState(initialForm);
  const [token, setToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const [theme, setTheme] = useState<string>("dark");

  const { name, email, message } = form;

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme === "light" ? "light" : "dark");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const onVerifyCaptcha = (token: string) => {
    setToken(token);
  };

  const onCaptchaExpire = () => {
    setToken(null);
    setResult("Captcha expired. Please try again.");
  };

  const changeFormValue = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Verify captcha token before submission
    if (!token) {
      setResult("Please complete the captcha.");
      captchaRef.current?.execute();
      return;
    }

    setResult("Sending...");
    try {
      const response = await fetch(
        `https://submit-form.com/${formSparkFormId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            "h-captcha-response": token,
          }),
        }
      );

      if (response.ok) {
        setResult("Form submitted!");
        // Reset form and captcha
        setForm(initialForm);
        setToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        setResult("Error submitting form. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <PageTitle>
        <h1>Contact me</h1>
        <h2>Say hi, if you'd like</h2>
        {result && <p>{result}</p>}
      </PageTitle>
      <FormContainer onSubmit={onSubmit}>
        <TopFields>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={changeFormValue}
            required
          />
          <Field
            type="email"
            name="email"
            placeholder="Email@address.com"
            value={email}
            onChange={changeFormValue}
            required
          />
        </TopFields>
        <BodyField
          name="message"
          placeholder="Hello Bob, have you heard about..."
          value={message}
          onChange={changeFormValue}
          required
        />
        <Honeypot
          type="checkbox"
          name="_honeypot"
          tabIndex={-1}
          autoComplete="off"
        />
        <CaptchaContainer>
          <HCaptcha
            ref={captchaRef}
            sitekey={hCaptchaSiteKey}
            onVerify={onVerifyCaptcha}
            onExpire={onCaptchaExpire}
            theme={theme}
          />
        </CaptchaContainer>
        <SubmitButton type="submit">
          <p>Send</p>
          <span className="material-icons">send</span>
        </SubmitButton>
      </FormContainer>
    </>
  );
};

export default ContactPage;
