import React from "react";
import ReactDOM from "react-dom/client";
import PageHeader from "./components/PageHeader.tsx";
import "./global.css";
import PageWrapper from "./components/PageWrapper.tsx";
import Introduction from "./components/Introduction.tsx";
import SectionDivider from "./components/SectionDivider.tsx";
import Experience from "./components/Experience.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PageHeader />
    <PageWrapper>
      <Introduction />
      <SectionDivider/>
      <Experience />
      <SectionDivider/>
    </PageWrapper>
  </React.StrictMode>
);
