import { useState } from 'react';
import './App.css'
// src/App.jsx

const App = () => {
  const [team, setTeam] = useState([])

  const [money, setMoney] = useState(100)

  const zombieFighters = [
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  const [zombieFightersState, setZombieFighters] = useState(zombieFighters)

  function handleAddFighter(fighter) {

    if (money - fighter.price > 0) {
      setTeam([...team, fighter])

      setZombieFighters(team =>
        team.filter(zf => zf.id !== fighter.id)
      )
      setMoney(reduceMoney => reduceMoney - fighter.price)
    } else {
      console.log('Not enough money');

    }

  }

function checkTeam() {
  const isTeamEmpty = team.length === 0

  if (isTeamEmpty) {
    return <p>Pick some team members!</p>
  }
}

const totalStrength = team.reduce((strength, fighter) => strength + fighter.strength, 0)
const totalAgility = team.reduce((agility, fighter) => agility + fighter.agility, 0)

function handleRemoveFighter(fighter) {
  const removeFromTeam = team.filter(zf => zf.id !== fighter.id)
  setMoney(refund => refund + fighter.price)

  setTeam(removeFromTeam)
  setZombieFighters([...zombieFightersState, fighter])
}

  return (
    <>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team: </h2>
      {checkTeam()}
      <ul>
        {team.map((fighter) =>
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <p>{fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
        )}
      </ul>
      <h2>Fighters</h2>
      <ul>
        {zombieFightersState.map((fighters) =>
          <li key={fighters.id}>
            <img src={fighters.img} alt={fighters.name} />
            <p>{fighters.name}</p>
            <p>Price: {fighters.price}</p>
            <p>Strength: {fighters.strength}</p>
            <p>Agility: {fighters.agility}</p>
            <button onClick={() => handleAddFighter(fighters)}>Add</button>
          </li>
        )}
      </ul>
    </>
  );
}

export default App
