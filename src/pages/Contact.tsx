import React from "react";
import styled from "styled-components";

const PageTitle = styled.div`
  margin-bottom: 3.5rem;
  margin-top: 1rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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

const ContactPage = () => {
  return (
    <>
      <PageTitle>
        <h1>Contact me</h1>
        <h2>
          I <s>won't</s> bite
        </h2>
      </PageTitle>
      <FormContainer>
        <TopFields>
          <Field type="text" placeholder="Name" />
          <Field type="email" placeholder="Email@address.com" />
        </TopFields>
        <BodyField placeholder="Hello Bob, I'd like to contact you!" />
        <SubmitButton>
          <p>Send</p>
          <span className="material-icons">send</span>
        </SubmitButton>
      </FormContainer>
    </>
  );
};

export default ContactPage;
