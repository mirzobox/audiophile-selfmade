import { NavLink } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import getFormData from "../utils/get-form-data";
function Signup() {
  const { loginWithDisplayNameAndEmailAndPassword, loginWithGoogleProvider } =
    useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    loginWithDisplayNameAndEmailAndPassword(data);
  }
  function handleLogin() {
    loginWithGoogleProvider();
  }
  return (
    <section className="h-full w-full bg-black">
      <div className="base-container flex h-full items-center justify-center">
        <div className="flex w-full max-w-md flex-col">
          <h2 className="mb-5 text-center text-3xl font-bold text-orange">
            Signup
          </h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-6 flex flex-col gap-4">
              <label>
                <span className="mb-2 block font-bold text-white-100">
                  Username
                </span>
                <input
                  className="login-input"
                  type="text"
                  name="displayName"
                  placeholder="Enter your username"
                  autoComplete="off"
                />
              </label>
              <label>
                <span className="mb-2 block font-bold text-white-100">
                  Email*
                </span>
                <input
                  className="login-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  required
                />
              </label>
              <label>
                <span className="mb-2 block font-bold text-white-100">
                  Password*
                </span>
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="off"
                  required
                />
              </label>
            </div>
            <div className="flex w-full flex-col gap-3">
              <button className="orange-button rounded-lg">Submit</button>
              <button
                onClick={handleLogin}
                className="accent-button rounded-lg border-white-100 text-white-100 transition-opacity hover:opacity-80"
                type="button"
              >
                Google
              </button>
            </div>
          </form>
          <NavLink
            className="text-white-50 ml-auto underline hover:no-underline"
            to="/login"
          >
            I have already registered
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Signup;
