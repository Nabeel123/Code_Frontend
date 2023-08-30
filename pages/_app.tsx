import "../public/css/styles.css";
import React, { useEffect, useState } from "react";
import { Flex, StyleProvider, ThemePicker } from "vcc-ui";
import Dashboard from "../src/pages/Dashboard";

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const itemsPerPage = isMobile ? 1 : 4;

  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker>
          <Dashboard ITEMS_PER_PAGE={itemsPerPage} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
