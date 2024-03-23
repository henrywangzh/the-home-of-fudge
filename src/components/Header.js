// src/components/Header.js

import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <h1>Henry Wang</h1>
            <a href="https://www.linkedin.com/in/henrywangzh/">LinkedIn</a> |{" "}
            <a href="https://github.com/henrywangzh">GitHub</a> |{" "}
            <a href="https://fudgeawsome.itch.io/">itch</a>
        </header>
    );
};

export default Header;
