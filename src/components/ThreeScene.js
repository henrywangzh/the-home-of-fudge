import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { letterMap } from "./LetterMap";

const cubeSize = 1; // Size of each cube
const spacing = 0; // Spacing between cubes
const ThreeScene = () => {
    const sceneRef = useRef(null);
    let camera, renderer;

    // State to manage the text input value
    const [textInput, setTextInput] = useState("Henry Wang");

    // State to store colors for each letter
    const [letterColors, setLetterColors] = useState({});

    useEffect(() => {
        // Create a new scene
        const scene = new THREE.Scene();

        // Create a camera
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Create a renderer
        renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparency
        renderer.setClearColor(0x00d5ff, 1); // Set background color to blue

        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current.appendChild(renderer.domElement);

        // Add a cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        // change size of cube
        cube.scale.set(3, 3, 3);
        scene.add(cube);

        // Create a random spline curve
        const numPointsCubeSpline = 10; // Number of points on the spline
        const cubeSplinePoints = [];
        for (let i = 0; i < numPointsCubeSpline; i++) {
            const x = 15 + Math.random() * 40 - 20; // Random x coordinate within range (-20, 20)
            const y = Math.random() * 40 - 20; // Random y coordinate within range (-20, 20)
            const z = Math.random() * 40 - 20; // Random z coordinate within range (-20, 20)
            cubeSplinePoints.push(new THREE.Vector3(x, y, z));
        }
        cubeSplinePoints.push(cubeSplinePoints[0]); // Close the spline loop
        const cubeSpline = new THREE.CatmullRomCurve3(cubeSplinePoints);
        const cubeSplineGeometry = new THREE.BufferGeometry().setFromPoints(
            cubeSpline.getPoints(100)
        );
        const cubeSplineMaterial = new THREE.LineBasicMaterial({
            color: 0xff0000,
        });
        const cubeSplineObject = new THREE.Line(
            cubeSplineGeometry,
            cubeSplineMaterial
        );
        scene.add(cubeSplineObject);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        // Create a Catmull-Rom spline
        const splinePoints = [];
        const numPoints = 40; // Number of points on the spline
        const radius = 20;

        for (let i = 0; i < numPoints; i++) {
            const angle = (i / numPoints) * Math.PI * 2; // Angle from 0 to 2PI
            const x = Math.cos(angle) * radius; // X coordinate of the point on the circle
            const y = Math.sin(angle) * radius; // Y coordinate of the point on the circle
            let z = 0;
            if (i != numPoints - 1 && i != 0 && i != 1) {
                // z = (Math.random() - 0.5) * 1; // Random vertical variation within [-1, 1]
            }
            splinePoints.push(new THREE.Vector3(x + 10, y, z)); // Add the point to the spline
        }
        splinePoints.push(splinePoints[0]); // Close the spline loop

        const spline = new THREE.CatmullRomCurve3(splinePoints);
        const splineGeometry = new THREE.BufferGeometry().setFromPoints(
            spline.getPoints(100)
        );
        const splineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
        const splineObject = new THREE.Line(splineGeometry, splineMaterial);
        // scene.add(splineObject);

        // text stuff

        // Function to create a cube
        const createCube = (x, y, z, color) => {
            const geometry = new THREE.BoxGeometry(
                cubeSize,
                cubeSize,
                cubeSize
            );

            // generate random color
            const material = new THREE.MeshPhongMaterial({
                color: color,
            });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(x, z, y);
            scene.add(cube);
        };

        // Function to render a letter
        const renderLetter = (letter, startX, startY) => {
            const letterArray = letterMap[letter.toUpperCase()]; // Get the array representation of the letter
            if (!letterArray) return; // Return if letter not found

            // Generate or retrieve color for the letter
            let color = letterColors[letter];
            if (!color) {
                const hue = Math.random() * 360;
                const saturation = 70 + Math.random() * 30;
                const lightness = 40 + Math.random() * 30;
                color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
                setLetterColors((prevColors) => ({
                    ...prevColors,
                    [letter]: color,
                }));
            }

            for (let row = 0; row < letterArray.length; row++) {
                const rowData = letterArray[row];
                for (let col = 0; col < rowData.length; col++) {
                    if (rowData[col] === 1) {
                        // Draw a cube at the corresponding position
                        createCube(
                            startX + col * (cubeSize + spacing),
                            startY - row * (cubeSize + spacing),
                            0,
                            color
                        );
                    }
                }
            }
        };

        // Text to display and starting position

        const renderText = (text) => {
            if(text === "") {
                setLetterColors({});
            }
            let startX = 0;
            let startY = (text.length / 20) * (cubeSize + spacing) * 5 - 2.5;
            for (let i = 0; i < text.length; i++) {
                const letter = text[i];
                renderLetter(
                    letter,
                    startX + (i % 10) * (cubeSize + spacing),
                    startY
                );
                startX += 3 * (cubeSize + spacing);
                if ((i + 1) % 10 === 0) {
                    // Check if it's the 10th letter
                    startY += -(cubeSize + spacing) * 6; // Adjust startY for the next row
                    startX = 0;
                }
            }
        };

        renderText(textInput);

        // Set initial camera position and look-at direction
        camera.position.copy(splinePoints[0]);

        // Animation loop
        const animate = () => {
            // Calculate the position along the spline based on time
            const cubePeriod = 20000; // Period of the animation in milliseconds
            const cubeT = (Date.now() % cubePeriod) / cubePeriod; // Adjust the period as needed
            const cubePosition = cubeSpline.getPointAt(cubeT);
            cube.position.copy(cubePosition); // Update the cube's position along the spline

            // Calculate the position along the spline based on time
            const period = 20000; // Period of the animation in milliseconds
            const t = (Date.now() % period) / period; // Adjust the period as needed
            const position = spline.getPointAt(t);
            camera.position.copy(position.multiplyScalar(1.5));

            camera.lookAt(10, 0, 0);
            // make the camera face up
            camera.up.set(0, 0, 1);

            // update cube color
            // Smoothly change the color of the cube
            // Slowly change the color of the cube
            const hueSpeed = 60; // Adjust the speed of hue change (degrees per second)
            const hue = ((Date.now() / 1000) * hueSpeed) % 360; // Change hue over time
            const saturation = 70; // Random saturation value (70-100)
            const lightness = 40; // Random lightness value (40-70)
            const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`; // Construct HSL color string
            cube.material.color.set(color); // Set the color of the cube's material

            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Resize listener
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function
        return () => {
            sceneRef.current.removeChild(renderer.domElement);
            window.removeEventListener("resize", handleResize);
        };
    }, [textInput]);

    // Handle text input change
    const handleInputChange = (e) => {
        setTextInput(e.target.value);
    };
    return (
        <div
            ref={sceneRef}
            style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        >
            <input
                style={{
                    position: "absolute",
                    top: "2vh",
                    left: "70vw",
                    zIndex: 100000,
                    padding: "0.5rem", // Add padding for easier clicking
                    fontSize: "1rem", // Adjust font size for better visibility
                    width: "20vw", // Set a fixed width to ensure it remains accessible
                }}
                type="text"
                onChange={handleInputChange}
                placeholder="Try me!"
            />
        </div>
    );
};

export default ThreeScene;
