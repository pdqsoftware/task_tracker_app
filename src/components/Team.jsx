import React from "react"

const Team = () => {
    const developerNames = [
        "Alice Smith",
        "Bob Johnson",
        "Charlie Brown",
        "Diana Martinez",
        "Ethan Williams",
        "Fiona Davis"
    ]

    return (
        <>
            <h4>Developers who worked on the Tasks Tracker App:</h4>
            <ul>
                {developerNames.map((name, index) => {
                    return <li key={index}>{name}</li>
                })}
            </ul>
        </>
    )
}

export default Team