import "./App.css";
import React from "react";
import { MyDrawer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });
  return (
    <div className="App u-ff-dm">
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<MyDrawer />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
