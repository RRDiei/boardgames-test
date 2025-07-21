import { useState, useEffect } from "react";
import { useUserContext } from "../../hooks/useUser";
import { users } from "../data/users";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("You're already logged in!");
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  // Redirect to home page if there is a user already logged in
  useEffect(() => {
    if (user) {
      navigate("/", {
        state: { showToast: true, message: toastMessage },
      });
    }
  }, [user, navigate]);

  const submitLoginForm = (e) => {
    e.preventDefault();
    const foundUser = users.find((user) => user.name === username);
    console.log(foundUser);
    if (!foundUser || password !== foundUser.password) {
      alert("Incorrect username or password. Try again!");
      setUsername("");
      setPassword("");
    } else {
      setToastMessage("Logged in successfully!");
      setUser(foundUser);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold pb-3">Log In</h2>
      <div className="bg-gray-50 w-200 h-100 px-10 rounded-2xl">
        <form
          onSubmit={submitLoginForm}
          className="flex flex-col w-full h-full justify-around items-center"
        >
          <div>
            <label htmlFor="username" className="customLabel">
              Username:
            </label>
            <input
              className="customInput"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="customLabel">
              Password:
            </label>
            <input
              className="customInput"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="btn login-btn">
              Log In
            </button>
          </div>
        </form>
      </div>
      <p className="text-sm">
        Not a user yet? Register{" "}
        <a className="text-blue-700" href="/register">
          here!
        </a>
      </p>
    </div>
  );
};
export default LoginPage;
