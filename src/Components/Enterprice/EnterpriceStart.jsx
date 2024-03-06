import "/src/Components/Enterprice/EnterpriceStart.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const EnterpriceStart = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail("");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your mail has been saved",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <>
      <div className="enterprice_start">
        <div className="start_wripper">
          <h1 className="title">
            An enterprise template to ramp up your company website
          </h1>

          <form action="/" className="form">
            <input
              type="email"
              value={email}
              id="input"
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Link to="/">
              <button id="submit" onClick={handleEmail}>
                Start now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnterpriceStart;
