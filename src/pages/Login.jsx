import { NavLink } from "react-router-dom";
import getFormData from "../utils/get-form-data";
import useLogin from "../hooks/useLogin";
import { useSelector } from "react-redux";
function Login() {
  const { loginWithEmailAndPassword, loginWithGoogleProvider } = useLogin();
  const { isPending } = useSelector((state) => state.user);
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    loginWithEmailAndPassword(data);
  }
  function handleLogin() {
    loginWithGoogleProvider();
  }
  return (
    <section className="h-full w-full bg-black">
      <div className="base-container flex h-full items-center justify-center">
        <div className="flex w-full max-w-md flex-col">
          <h2 className="mb-5 text-center text-3xl font-bold text-orange">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-6 flex flex-col gap-4">
              <label>
                <span className="label-input">Email*</span>
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
                <span className="label-input">Password*</span>
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
              <button
                className={"orange-button rounded-lg"}
                disabled={isPending}
              >
                {isPending ? "Loading..." : "Submit"}
              </button>
              <button
                className="accent-button-white"
                onClick={handleLogin}
                type="button"
              >
                Google
              </button>
            </div>
          </form>
          <NavLink
            className="text-white-50 ml-auto underline hover:no-underline"
            to="/signup"
          >
            If you have not account yet ?
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Login;
