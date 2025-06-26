import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AntConfigProvider from "./providers/AntConfigProvider.tsx";
import BaseLayout from "./layout/BaseLayout.tsx";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <AntConfigProvider>
          <App />
        </AntConfigProvider>
      </BaseLayout>
    </BrowserRouter>
  </StrictMode>
);
