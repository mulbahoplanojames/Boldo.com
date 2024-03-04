import "/src/Components/Team/Team.css";
import TeamCard from "./TeamCard";
import { teamMembers } from "../../Constant/Constant";

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
          {teamMembers.map((teamMember) => {
            return (
              <TeamCard
                key={teamMember.id}
                image={
                  <img src={teamMember.image} alt="team members images"></img>
                }
                name={teamMember.name}
                position={teamMember.position}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
