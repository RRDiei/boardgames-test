import { useState } from "react";
import { useUserContext } from "../../hooks/useUser";
import { users } from "../data/users";
import bcrypt from "bcryptjs";
import { toast, ToastContainer } from "react-toastify";
import useRedirectHome from "../../hooks/useRedirectHome";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("You're already logged in!");
  const { user, setUser } = useUserContext();

  useRedirectHome(user, toastMessage);

  const submitLoginForm = async (e) => {
    e.preventDefault();
    setUsername(username.trim());
    setPassword(password.trim());
    const foundUser = users.find((user) => user.name === username);
    const matchingPasswords = await bcrypt.compare(
      password,
      foundUser.password
    );
    if (!foundUser || !matchingPasswords) {
      toast.error("Incorrect username or password. Try again!");
      setUsername("");
      setPassword("");
    } else {
      setToastMessage("Logged in successfully!");
      setUser({
        name: foundUser.name,
        avatar: foundUser.avatar,
      });
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
      <ToastContainer />
    </div>
  );
};
export default LoginPage;
