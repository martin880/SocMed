import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ChakraProvider} from "@chakra-ui/react"
import { AuthContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ChakraProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ChakraProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
