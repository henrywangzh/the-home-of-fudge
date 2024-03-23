// ContentCard.js

import React, { useState } from "react";
import "./ContentCard.css";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

const ContentCard = () => {
      const [expanded, setExpanded] = useState(false);
      const [collapsed, setCollapsed] = useState(false);

      const handleOnClick = (event) => {
          const card = event.currentTarget.querySelector(".content-card");
          const { clientX } = event;
          const { left, width } = event.currentTarget.getBoundingClientRect();
          const clickPosition = clientX - left;
        if(collapsed) {
            toggleCollapse();
        } else if (expanded) {
            toggleExpand();
        }
        else if (clickPosition > width / 2) {
            toggleExpand();
        } else {
            toggleCollapse();
        }
      };
      const toggleExpand = () => {
          setExpanded(!expanded);
      };

      const toggleCollapse = () => {
            setCollapsed(!collapsed);
        }
    return (
        <div
            className={`content-card ${expanded ? "expanded" : ""} ${
                collapsed ? "collapsed" : ""
            }`}
            onClick={handleOnClick}
        >
            <Header />
            <main>
                <About />
                <Experience />
                <Projects />
            </main>
        </div>
    );
};

export default ContentCard;
