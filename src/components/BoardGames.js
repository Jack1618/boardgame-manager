import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

export default function Header(){

    
    const [boardgames, setboardgames] = useState([]);
    const [newboardgame, setNewboardgame] = useState({ name: '', minimumPlayers: '', maximumPlayers: '' });
    console.log(boardgames);
    // Fetch boardgames from the mock database
    useEffect(() => {
    axios.get(`${apiUrl}/boardgames`)
        .then(response => setboardgames(response.data))
        .catch(error => console.error("Error fetching data: ", error));
    }, []);

    // Add a new boardgame to the database
    const addboardgame = () => {
    if (newboardgame.name && newboardgame.minimumPlayers > 0 && newboardgame.maximumPlayers > 0) {
        axios.post((`${apiUrl}/boardgames`), { name: newboardgame.name, minimumPlayers: newboardgame.minimumPlayers, maximumPlayers: newboardgame.maximumPlayers })
        .then(response => {
            setboardgames([...boardgames, response.data]);
            setNewboardgame({ name: '', minimumPlayers: '', maximumPlayers: '' });
        })
        .catch(error => console.error("Error adding boardgame: ", error));
    }
    };

    return (
    <div className="App">
        <h1>Boardgame Manager</h1>
        {/* Form to add a new user */}
        <input
        type="text"
        placeholder="Name"
        value={newboardgame.name}
        onChange={(e) => setNewboardgame({ ...newboardgame, name: e.target.value })}
        />
        <input
        type="number"
        placeholder="Minimum Players"
        value={newboardgame.minimumPlayers}
        onChange={(e) => setNewboardgame({ ...newboardgame, minimumPlayers: e.target.value })}
        />
        <input
        type="number"
        placeholder="Maximum Players"
        value={newboardgame.maximumPlayers}
        onChange={(e) => setNewboardgame({ ...newboardgame, maximumPlayers: e.target.value })}
        />
        <button onClick={addboardgame}>Add boardgame</button>

    {boardgames.map((boardgame) => (
    <div key={boardgame.id}>
    <h3>{boardgame.name}</h3>
    <p>Minimum Players: {boardgame.minimumPlayers}</p>
    <p>Maximum Players: {boardgame.maximumPlayers}</p>
    </div>
    ))}
    </div>
    );
}