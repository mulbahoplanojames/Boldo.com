import { enterpriceData } from "../../Constant/Constant";
import EnterpriceCard from "../EnterpriceCard/EnterpriceCard";

const Enterprice = () => {
  return (
    <>
      <div className="enterprice">
        <h1 className="title">
          An enterprise template to ramp up <br /> your company website
        </h1>

        <div className="enterprice_wripper">
          {enterpriceData.map((data) => {
            return (
              <EnterpriceCard
                key={data.id}
                descrption={data.description}
                img={<img src={data.image} alt="enterprice images" />}
                name={data.name}
                position={data.position}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Enterprice;
