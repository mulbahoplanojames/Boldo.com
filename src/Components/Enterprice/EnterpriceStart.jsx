import "/src/Components/Enterprice/EnterpriceStart.css";
import Btn1 from "../Buttons/Btn2";
import Btn2 from "../Buttons/Btn2";
import { Link } from "react-router-dom";

const EnterpriceStart = () => {
  return (
    <>
      <div className="enterprice_start">
        <div className="start_wripper">
          <h1 className="title">
            An enterprise template to ramp up <br /> your company website
          </h1>

          <form action="/">
            <input
              type="email"
              name="email"
              id="input"
              placeholder="Your email address"
            />
            <Link to="/">
              <Btn2 type="submit" value={"Start now"} />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnterpriceStart;
