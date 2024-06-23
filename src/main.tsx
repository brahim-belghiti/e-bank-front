import "./index.css";
import App from "@/app";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { AuthProvider } from "./context/authContext";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>,
  );
}
