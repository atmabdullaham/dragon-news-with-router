import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero border">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-xl font-bold text-center">Register your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            {/* photourl */}
            <label className="label">Photo URL</label>
            <input type="url" className="input" placeholder="Photo url" />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Error will show here</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
        <h2 className="text-base font-normal text-center">
          Already have an account?{" "}
          <Link to="/auth/login">
            <span className="font-semibold text-secondary">Login</span>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Register;
