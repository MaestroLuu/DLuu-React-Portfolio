import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  // selects which page to render
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer className="text-center">
        <a href="mailto: DLuu.developer@gmail.com">DLuu.developer@gmail.com</a> |
        | <a href="tel:858-256-6163">858.256.6163</a> |
        | <a href="https://github.com/MaestroLuu">Github</a> |
        | <a href="https://www.linkedin.com/in/david-luu-developer/">LinkedIn</a>
      </footer>
    </div>
  );
}
