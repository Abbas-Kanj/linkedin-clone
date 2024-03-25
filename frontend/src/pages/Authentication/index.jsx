import "./style.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    if (!credentials.email.includes("@")) {
      setError("Invalid email");
    } else if (credentials.password.length < 6) {
      setError("Short password");
    } else {
      setError("");
    }
  }, [credentials]);

  useEffect(() => {
    axios.get("URL").then((response) => {
      setQuizes(response.data);
    });
  }, []);

  return (
    <div className="flex center page auth-page">
      <div className="flex center auth-box rounded secondary-bg">
        {isLogin ? (
          <div className="flex column center full-width login-form">
            <h3>Login</h3>

            <input
              className="full-width rounded"
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setCredentials({
                  ...credentials,
                  email: e.target.value,
                });
              }}
            />
            <input
              className="full-width rounded"
              type="text"
              placeholder="Password"
              onChange={(e) => {
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                });
              }}
            />

            {error !== "" && <p>{error}</p>}

            <button
              className="rounded bold secondary-bg full-width"
              onClick={async () => {
                try {
                  const { email, password } = credentials;

                  const response = await axios.post(
                    "http://127.0.0.1:8000/login",
                    {
                      email,
                      password,
                    }
                  );

                  console.log(response.data);
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              Login
            </button>

            <p>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        ) : (
          <div className="flex column center full-width login-form">
            <h3>Sign Up</h3>

            <input
              className="full-width rounded"
              type="text"
              placeholder="Email"
            />
            <input
              className="full-width rounded"
              type="text"
              placeholder="Password"
            />
            <input
              className="full-width rounded"
              type="text"
              placeholder="Confirm Password"
            />

            <button
              className="rounded bold secondary-bg full-width"
              onClick={() => {}}
            >
              Sign up
            </button>

            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setIsLogin(true);
                }}
              >
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const LoginForm = () => {};

export default Authentication;
