import { useNavigate } from "react-router-dom";

const LoginForm = ({ switchHandler }) => {
  const navigate = useNavigate();

  return (
    <div className="flex column center full-width login-form">
      <h3>Login</h3>

      <input className="full-width rounded" type="text" placeholder="Email" />
      <input
        className="full-width rounded"
        type="text"
        placeholder="Password"
      />

      <button
        className="rounded bold secondary-bg full-width"
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </button>

      <p>
        Don't have an account?{" "}
        <span
          onClick={() => {
            switchHandler(false);
          }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
