const SignupForm = ({ switchHandler }) => {
  return (
    <div className="flex column center full-width login-form">
      <h3>Sign Up</h3>

      <input className="full-width rounded" type="text" placeholder="Email" />
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
            switchHandler(true);
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
