import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Link } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Skip to main content link for keyboard accessibility */}
      <Link
        href="#main-content"
        sx={{
          position: "absolute",
          left: "-9999px",
          zIndex: 9999,
          padding: "1rem",
          backgroundColor: "primary.main",
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          "&:focus": {
            left: "1rem",
            top: "1rem",
            outline: "3px solid",
            outlineColor: "secondary.main",
          },
        }}
      >
        Skip to main content
      </Link>
      <Navbar />
      <Box component="main" id="main-content" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/board" element={<BoardPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
