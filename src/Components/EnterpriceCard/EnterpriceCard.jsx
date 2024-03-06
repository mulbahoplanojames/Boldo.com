import "/src/Components/Enterprice/Enterpeics.css";

const EnterpriceCard = (props) => {
  const { descrption, img, name, position } = props;

  return (
    <>
      <div className="card_wripper">
        <p className="description">{descrption}</p>

        <div className="details">
          <div className="img">{img}</div>
          <div className="person">
            <p className="name">{name}</p>
            <p className="position">{position}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriceCard;

// Style are in the Enterprice.css
