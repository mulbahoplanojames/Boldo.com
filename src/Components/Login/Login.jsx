import React from "react";
import "/src/Components/Login/Login.css";
import { useState, useEffect } from "react";
import { GrMail } from "react-icons/gr";
import { BsPersonFillLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import img5 from "../../assets/login.jpg";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState("");

  // useEffect(() => {

  // },[submit])

  return (
    <>
      <div className="login">
        <div className="login_wripper">
          <div className="form_wripper">
            <div className="img">
              <img src="src/assets/login.jpg" alt="voy with a computer" />
            </div>

            <div className="form">
              <h2 className="title">Login your account</h2>
              <form action="/">
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
                    placeholder="Username"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <BsPersonFillLock className="icon" />
                </div>
                <div>
                  <input
                    type="submit"
                    id="submit"
                    value={"login"}
                    onClick={(e) => {
                      e.preventDefault();
                      setSubmit(
                        alert(
                          `Hi, thanks for reaching out to us we will get back to you shortly on this ${name}`
                        )
                      );
                    }}
                  />
                </div>
                <p>
                  <Link to="/">Create account</Link>
                </p>
              </form>
              <div className="welcome_back">
                <span>Welcome Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
