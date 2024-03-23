import React from "react";
import "./App.css";

import ContentCard from "./components/ContentCard"; // Import the ContentCard component
import ThreeScene from "./components/ThreeScene"; // Import the ThreeScene component
import Footer from "./components/Footer"; // Import the Footer component

function App() {
    return (
        <div className="App">
            <ContentCard />
            <ThreeScene /> {/* Render the Three.js scene */}
            <Footer />
        </div>
    );
}

export default App;
