import "/src/Components/Login/Login.css";
import { useState } from "react";
import { GrMail } from "react-icons/gr";
import { BsPersonFillLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import img5 from "../../assets/login.jpg";
import Swal from "sweetalert2";
import "animate.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <>
      <div className="login">
        <div className="login_wripper">
          <div className="form_wripper animate__animated animate__fadeInDownBig">
            <div className="img">
              <img src={img5} alt="voy with a computer" />
            </div>

            <div className="form">
              <h2 className="title">Login your account</h2>
              <form onSubmit={handleSubmit}>
                <div className="input_wripper">
                  <input
                    type="text"
                    placeholder="Username"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <GrMail className="icon" />
                </div>
                <div className="input_wripper">
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <BsPersonFillLock className="icon" />
                </div>
                <div>
                  <input type="submit" id="submit" value={"login"} />
                </div>
                <p>
                  <Link to="/" className="create_account">
                    Create account
                  </Link>
                </p>
              </form>
              <div className="welcome_back">
                <span className="welcome_span">Welcome Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
