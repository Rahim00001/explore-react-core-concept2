import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    const handleAdd = () => {
        const newPlayer = team + 1;
        setTeam(newPlayer)
    }
    const handleReduce = () => {
        setTeam(team - 1)
    }
    return (
        <div style={teamStyle}>
            <h2>Available Players:{team}</h2>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleReduce}>Sell Player</button>
        </div>
    )
}