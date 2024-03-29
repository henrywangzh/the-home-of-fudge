// src/components/Projects.js

import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <h3>Web/App Development</h3>
            <li>
                <a href="https://github.com/uclaacm/studio.uclaacm.com">
                    ACM Studio Website
                </a>{" "}
                UCLA's game development club
            </li>
            <li>
                <a href="https://github.com/bliutech/re">re</a> LA Hacks 2022.
                full-stack + computer vision for sorting recyclables
            </li>
            <li>
                <a href="https://github.com/AryamanLadha/onTrack-Backend">
                    onTrack
                </a>{" "}
                (
                <a href="https://github.com/AryamanLadha/onTrack-AllCourses-Scraper">
                    another repo
                </a>
                ) UCLA Course Planner
            </li>
            <li>
                <a href="https://github.com/ricohasgithub/Covid-Classroom">
                    Covid Classroom
                </a>{" "}
                (
                <a href="https://devpost.com/software/covid-classroom">
                    devpost
                </a>
                ) LA Hacks 2020. Full-stack + Audio ML
            </li>
            <li>
                <a href="https://github.com/ricohasgithub/Integrity">
                    Integrity
                </a>{" "}
                HackMIT 2020. full-stack. Anti-cheat test taking app
            </li>
            <li>
                <a href="https://github.com/35L-sleepy-tamagos/bruin-bites">
                    Bruin Bites
                </a>{" "}
                full-stack. Discover where your friends are eating
            </li>
            <li>
                <a href="https://github.com/UCLA-Noms">Noms</a> ongoing UCLA
                graph-based course planner with Neo4j
            </li>
            <li>
                <a href="https://github.com/henry-eugene/SocialMedia">Igloo</a>{" "}
                my first website! made in plain HTML, CSS, and JavaScript
            </li>
            <li>
                <a href="https://github.com/henrywangzh/RestaurantSignPennApps">
                    Sizzle{" "}
                </a>
                (<a href="https://devpost.com/software/yum-8gxtbc">devpost</a>){" "}
                PennApps 2020. Covid restaurant guidelines from the snap of a
                photo.
            </li>

            <h3>Games</h3>
            <li>
                <a href="https://do3naut.itch.io/xinshen">Xinshen</a> (
                <a href="https://github.com/henrywangzh/Xinshen">code</a>)
                Students Run Studio 2023. My largest ever 3D game project
            </li>
            <li>
                <a href="https://ldjam.com/events/ludum-dare/51/nine-knives">
                    Nine Knives
                </a>{" "}
                (<a href="https://github.com/kaiway-tang/LD51">code</a>) Ludum
                Dare 51. Top 3% out of 2500+ games
            </li>
            <li>
                <a href="https://aaisara12.itch.io/home-defender">
                    Home Defender
                </a>{" "}
                (<a href="https://github.com/aaisara12/HomeDefender">code</a>)
                SEJ Jam. Asteroid survival. My first unreal game
            </li>
            <li>
                <a href="https://github.com/Do3naut/UnityMLAgentsDemo">
                    Unity RL Agent Pathfinder
                </a>{" "}
                reinforcement learning and Unity
            </li>
            <li>
                <a href="https://austinlaw8.itch.io/revenge-of-the-penguins">
                    Revenge of the Penguins
                </a>{" "}
                (<a href="https://github.com/AustinLaw8/Snowjam-Team-5">code</a>
                ) Studio Snowjam 2022, icy tower defense
            </li>
            <li>
                <a href="https://do3naut.itch.io/crystalline">Crystalline</a>{" "}
                Berklee Game Music Jam 2022
            </li>
            <li>
                <a href="https://github.com/aaisara12/Studio-Land">
                    Studio Land
                </a>{" "}
                Collection of Unity workshops distilled in gaming format
            </li>
            <li>
                <a href="https://sudarshanseshadri26.itch.io/food-fight">
                    Food Fight
                </a>{" "}
                Students Run Studios 2022
            </li>
            <li>
                <a href="https://github.com/henrywangzh/CodingProjects/tree/main/Elementalists">
                    Elementalists
                </a>{" "}
                My first programming project ever, made in Java using AWT
            </li>
            <li>
                <a href="https://github.com/henrywangzh/SuperPeachSisters">
                    Super Peach Sisters
                </a>{" "}
                C++ twist on a popular 2D game
            </li>
            <li>
                <a href="https://do3naut.itch.io/deliverance">Deliverance</a> (
                <a href="https://github.com/lzhou0714/DucksOnCrack">code</a>)
                Ludum Dare 53
            </li>
            <li>
                <a href="https://mariopng.itch.io/chronondrum">Chronondrum</a>{" "}
                Ludum Dare 49
            </li>

            <h3>Graphics</h3>
            <li>
                <a href="">Raytracer</a> C++ Raytracer from scratch
            </li>
            <li>
                <a href="">Nanogolf</a> WebGL based mini-golf game with working
                physics engine
            </li>

            <h3>Other</h3>
            <li>Mini Java Compiler</li>
            <li>
                <a href="https://github.com/lzhou0714/147FinalProject">
                    EEG Classfier
                </a>
            </li>
            <li>Python Neural Network From First Principles</li>
            <li>
                Multithreaded gzip. Outperforms gzip on standard benchmarks by
                3x, written in Java
            </li>
            <li>Towers Game Solver. Written in Prolog</li>
            <li>Path Following Car, Arduino</li>
            <li>Autonomous Rover. Arduino, 3D printing, Solidworks</li>
            <li>
                <a href="https://sa.ucla.edu/ro/Public/SOC/Results/ClassDetail?term_cd=23F&subj_area_cd=ENGR%20%20%20&crs_catlg_no=0096A%20%20%20&class_id=186286200&class_no=%20011%20%20">
                    Engineering 96 - Introduction to Game Development
                </a>{" "}
                Created UCLA's first game dev course
            </li>
        </section>
    );
};

export default Projects;
