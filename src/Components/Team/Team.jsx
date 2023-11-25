import React from "react";
import "/src/Components/Team/Team.css";
import TeamCard from "./TeamCard";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";

const Team = () => {
  return (
    <>
      <div className="team">
        <p className="key_title">Our team</p>
        <h1 className="title">The leadership team</h1>
        <p className="description">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>

        <div className="team_card_wripper">
          <TeamCard
            image={<img src={team1} alt="team member"></img>}
            name="Oplano Mulbah"
            position="Co-Founder"
          />
          <TeamCard
            image={<img src={team2} alt="team member"></img>}
            name="Dwight Schrute"
            position="General Manager"
          />
          <TeamCard
            image={<img src={team3} alt="team member"></img>}
            name="John Stephen"
            position="Softwere Engineer"
          />
        </div>
      </div>
    </>
  );
};

export default Team;
