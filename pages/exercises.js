import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Header'
import Footer from '../components/Footer'
import { useState } from "react"
import Beginner from "../components/Beginner"
import Intermediate from "../components/Intermediate"
import Advanced from "../components/Advanced"
import ExerciseFInder from '../components/ExerciseFInder'



const Exercises = () => {
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
                    <div className='exerciseIntro'>
                        <div className='rightDiet' id="rightDiet">
                            <p className='foodp'>
                                Here at Urban Fit we care about you and your progress. We decided to form a complete workout routine for you to follow, whenever you need and wherever you are. Assembled with the beginner in mind, the program includes exercises for several disciplines, with the ultimate goal of performance enhancement, strengthening and muscle development. Ready? Let us set the game on.

                            </p>
                            <button className='foodButton'><a href="#exercisemachine" className='dietLink'>Get Started</a></button>

                        </div>
                        <div className='rightExercise' id="rightExercise">
                            <h1 className='exerciseTitle' id="exerciseTitle"><span className='exerciseSpan'>
                                We Help You</span><br></br>Get It Done!</h1>
                            <button className='foodButton button2' id="button2"><a href="#exercisemachine" className='dietLink'>Get Started</a></button>

                        </div>
                    </div>
                    <div className='exercisemachine' id="exercisemachine">
                        <h1>For How Long Have You Been Working Out?</h1>
                        <h4 style={{ margin: "20px" }}> Pick one alternative to see our suggestions </h4>
                        <div className='decider ex'>
                            <button onClick={() => setResponse("beginner")} className="dietButton exerciseButton">Beginner (1-3 months)</button>
                            <button onClick={() => setResponse("intermediate")} className="dietButton exerciseButton">Intermediate (3-12 months)</button>
                            <button onClick={() => setResponse("advanced")} className="dietButton exerciseButton">Advanced (12+ months)</button>

                        </div>
                        <div className='exerciseRender'>
                            {response == "beginner" && <Beginner />}
                            {response == "intermediate" && <Intermediate />}
                            {response == "advanced" && <Advanced />}

                        </div>
                        <div className='exerciseList'>
                            <ExerciseFInder />
                        </div>
                    </div>
                </div>

            </main >

            <footer className="footer">
                <Footer />
            </footer>
        </div >
    )
}

export default Exercises