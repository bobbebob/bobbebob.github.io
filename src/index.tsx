import React from "react";
import ReactDOM from "react-dom/client";
import PageHeader from "./components/PageHeader.tsx";

import "./global.css";
import PageWrapper from "./components/PageWrapper.tsx";
import Introduction from "./components/Introduction.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PageWrapper>
      <PageHeader />
      <Introduction />
    </PageWrapper>
  </React.StrictMode>
);
