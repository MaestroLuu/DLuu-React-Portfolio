import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume";

const styles = {
  fontColor: {
    color: "#fff",
  },
};

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
        <a style={styles.fontColor} href="mailto: DLuu.developer@gmail.com">
          DLuu.developer@gmail.com
        </a>{" "}
        |{" "}
        <a style={styles.fontColor} href="tel:858-256-6163">
          858.256.6163
        </a>{" "}
        |{" "}
        <a style={styles.fontColor} href="https://github.com/MaestroLuu">
          Github
        </a>{" "}
        |{" "}
        <a
          style={styles.fontColor}
          href="https://www.linkedin.com/in/david-luu-developer/"
        >
          LinkedIn
        </a>
        |{" "}
        <a
          style={styles.fontColor}
          href="https://calendly.com/dluu-developer"
        >
          Calendly
        </a>
      </footer>
    </div>
  );
}
