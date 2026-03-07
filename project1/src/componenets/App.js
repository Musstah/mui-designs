import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            path="/"
            element={<div style={{ height: "2000px" }}>Home</div>}
          />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/customsoftware" element={<div>Customsoftware</div>} />
          <Route path="/mobileapps" element={<div>Mobileapps</div>} />
          <Route path="/websites" element={<div>Websites</div>} />
          <Route path="/revolution" element={<div>Revolution</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/estimate" element={<div>Estimate</div>} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
