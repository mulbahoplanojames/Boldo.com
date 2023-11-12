import React from "react";
import "/src/Components/Team/Team.css";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <>
      <div className="team">
        <p className="key_title">Our team</p>
        <h1 className="title">The leadership team</h1>
        <p className="description">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic <br /> mass market crowdfunding iteration.
          Traction stock user experience deployment beta <br /> innovator
          incubator focus.
        </p>

        <div className="team_card_wripper">
          <TeamCard 
          image={<img src="src/assets/team1.png" alt="team member"></img>}
          name='Oplano Mulbah'
          position='Co-Founder'
          />
          <TeamCard 
          image={<img src="src/assets/team2.png" alt="team member"></img>}
          name='Dwight Schrute'
          position='General Manager'
          />
          <TeamCard 
          image={<img src="src/assets/team3.png" alt="team member"></img>}
          name='John Stephen'
          position='Softwere Engineer'
          />
        </div>
      </div>
    </>
  );
};

export default Team;
