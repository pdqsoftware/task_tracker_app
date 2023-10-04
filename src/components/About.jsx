import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import "./About.css"

const AboutPage = () => {

    const [joke, setJoke] = useState({ content: null, fetch: true, isFetching: true })

    useEffect(() => {
        // Check if a joke is required
        if (!joke.fetch) return

        let fetchCount = 0

        const fetchJokes = async () => {
            try {
                const response = await fetch('https://v2.jokeapi.dev/joke/Programming')
                const data = await response.json()
                if (!data.joke && fetchCount <= 2) {
                    fetchJokes()
                } else {
                    setJoke({ content: data.joke, fetch: false, isFetching: false })
                }
                fetchCount++

            } catch (error) {
                setJoke({ content: "No joke available!  Try reloading", fetch: false, isFetching: false })
                console.log('Error fetching joke!', error)
            }
        }

        fetchJokes()

        return () => {
            joke.fetch = false
        }

        // [] ensures useEffect() just runs once when the component first renders:
    }, [joke, joke.fetch])

    return (
        <div className="about-container">
            <h2>About Our Services</h2>
            <p>We are here to provide you with a simple task tracker app to help you stay
            organised and manage your tasks efficiently</p>

            <div className="jokes-section">
                <h3>Programming Joke:</h3>
                <span>{joke.isFetching ? "Fetching joke..." : joke.content}</span>
            </div>

            <div>&nbsp;<Outlet /></div>
        </div>
    )
}

export default AboutPage