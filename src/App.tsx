import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import HomePage from "./pages/Home.tsx";
import PageHeader from "./components/PageHeader.tsx";
import PageWrapper from "./components/PageWrapper.tsx";
import PageFooter from "./components/PageFooter.tsx";
import ContactPage from "./pages/Contact.tsx";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures full viewport height */
  max-width: 850px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <PageHeader />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageWrapper>
        <PageFooter />
      </AppContainer>
    </Router>
  );
};

export default App;
