import "/src/Components/Team/Team.css";

const TeamCard = (props) => {
  const { image, name, position } = props;
  return (
    <>
      <div className="team_card">
        <div className="head">{image}</div>
        <p className="name">{name}</p>
        <p className="position">{position}</p>
      </div>
    </>
  );
};

export default TeamCard;

//! Styles are in the Team.css
