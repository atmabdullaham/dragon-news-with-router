import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero border">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-xl font-bold text-center">Login Your Account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
        <h2 className="text-base font-normal text-center">
          Don't have an account?{" "}
          <Link to="/auth/register">
            <span className="font-semibold text-secondary">Register</span>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Login;
