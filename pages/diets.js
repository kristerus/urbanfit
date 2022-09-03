import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Header'
import Footer from '../components/Footer'
import { useState } from "react"
import Vegetarian from "../components/Vegetarian"
import General from "../components/General"

const Diets = () => {
    const [response, setResponse] = useState("")
    return (
        <div>
            <Head>
                <title>Urban Fit - Biggest Modern Fitness Center In Albania</title>
                <meta name="description" content="Urban Fit is a modern fitness center, located near the center of Tirana, Albania. Covering an immense area, the center features a gym area, a cross fit and cardio environment, as well as a yoga and martial arts section, for groups of all ages. The gym is opened from Monday to Sunday, from 6:00 to 23:00 and features a sophisticated automated entry system. Every member is equipped with their own gym card. The gym has several instructors based on the type of activity. Working out is a pleasure. The gym also features a full-fledged sauna for maximal experience. Gym. Sauna. Karate. Cross-Fit. Cardio. Weightlifting. Workout. " />
                <link rel="icon" href="/urbanFitLogo.png" />
            </Head>

            <main className="main">
                <Navbar />
                <div style={{ overflowX: "hidden" }}>
                    <div className='dietsintro'>
                        <div className='leftDiet' id="leftDiet">
                            <h1 className='diettitle' id="dietTitle"><span className='firstLetter'>F</span>lavour<br></br><span className='firstLetter'>I</span>mportance<br></br><span className='firstLetter'>T</span>emptation</h1>
                            <button className='foodButton button2' id="button2"><a href="#dietmachine" className='dietLink'>Get Started</a></button>

                        </div>
                        <div className='rightDiet' id="rightDiet">
                            <p className='foodp'>The food we eat is the basis of everything happening in our body. Thereby, to help develop our body, we must first know how to nourish it appropriately.To help you with that, we at Urban Fit consulted some of the best nutritionists out there, and summed up a whole dieting program, taking into account your preferences and orientation. Whether you are looking forward to gaining mass and bulking or shedding down some kilos and cut, we got you covered. Ready to change your results? Let us get started! </p>
                            <button className='foodButton'><a href="#dietmachine" className='dietLink'>Get Started</a></button>
                        </div>

                    </div>
                    <div className='dietmachine' id="dietmachine">
                        <div className='dietmachineheader'>
                            <h1>I Am Looking For A ... </h1>
                            <div className='decider'>
                                <button onClick={() => setResponse("general")} className="dietButton">General Diet</button>
                                <button onClick={() => setResponse("vegetarian")} className="dietButton">Vegetarian Diet</button>
                            </div>
                        </div>
                        <div className='dietRender'>
                            {response == "vegetarian" ? <Vegetarian /> : <General />}
                        </div>
                    </div>
                </div>

            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Diets