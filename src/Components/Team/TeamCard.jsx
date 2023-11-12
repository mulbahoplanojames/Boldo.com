import React from 'react'
import '/src/Components/Team/Team.css'

const TeamCard = (props) => {
  return (
    <>
        <div className="team_card">
            <div className="head">{props.image}</div>
            <p className="name">{props.name}</p>
            <p className="position">{props.position}</p>
        </div>
    </>
  )
}

export default TeamCard