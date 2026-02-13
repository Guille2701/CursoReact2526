import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
// import CompanyForm from "./components/companies/CompanyForm";
import { CompaniesProvider } from "./context/CompaniesContext";
import "./index.css";
// import LoginForm from "./components/auth/LoginForm";
// import { AuthProvider } from "./context/AuthContext";
// import AppCompanies from "./apps/AppCompanies";
import { BrowserRouter } from "react-router-dom";
import AppFull from "./apps/AppFull";
import { AuthProvider } from "./context/AuthContext";


// cambio por cada ejercicio el valor de App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <CompaniesProvider>
        <div className="container mx-auto mt-10 px-4">
          <BrowserRouter>
            <AppFull />
          </BrowserRouter>
        </div>
        <Toaster position="top-right" richColors />
      </CompaniesProvider>
    </AuthProvider>
  </StrictMode>
);
