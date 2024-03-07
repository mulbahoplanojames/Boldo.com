import "/src/Components/Login/Login.css";
import { useState } from "react";
import { GrMail } from "react-icons/gr";
import { BsPersonFillLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import img5 from "/src/assets/login.jpg";
import Swal from "sweetalert2";
import "animate.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPassword("");
    setPassword("");
    setRetypePassword("");

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
      <section className="wripper">
        <div className="login_wripper">
          <div className="form_main_wripper animate__animated animate__fadeInDownBig">
            <div className="image_wripper">
              <img src={img5} alt="voy with a computer" />
            </div>

            <div className="form_wripper">
              <h2 className="title">Login your account</h2>

              <form onSubmit={handleSubmit}>
                <div className="input_wripper">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input_wripper">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="input"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <GrMail className="icon" />
                </div>
                <div className="input_wripper">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <BsPersonFillLock className="icon" />
                </div>
                <div className="input_wripper">
                  <input
                    type="password"
                    placeholder="Re-type Password"
                    required
                    className="input"
                    value={retypePassword}
                    onChange={(e) => setRetypePassword(e.target.value)}
                  />
                  <BsPersonFillLock className="icon" />
                </div>
                <div>
                  <input type="submit" id="submit" value={"login"} />
                </div>
                <p>
                  <Link to="/login" className="create_account">
                    Already have an account? Login
                  </Link>
                </p>
              </form>

              <div className="welcome_back">
                <span className="welcome_span">Welcome Back</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
