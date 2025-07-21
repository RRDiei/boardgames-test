import { useEffect, useState } from "react";
import { useUserContext } from "../../hooks/useUser";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { users } from "../data/users";

const Register = () => {
  const { user, setUser } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("You're already logged in!");
  const navigate = useNavigate();

  // Redirect to home page if there is a user already logged in
  useEffect(() => {
    if (user) {
      navigate("/", {
        state: { showToast: true, message: toastMessage },
      });
    }
  }, [user, navigate]);

  const submitRegisterForm = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match! Please, try again!");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    const foundUser = users.find((user) => user.name === username);
    if (foundUser) {
      toast.error(
        "This username is already taken. Please, try a different one!"
      );
      setConfirmPassword("");
      setPassword("");
      setUsername("");
      return;
    }
    const newUser = {
      name: username,
      password,
      avatar: "",
    };
    users.push(newUser);
    setToastMessage("User created successfully!");
    setUser(newUser);
    navigate("/", {
      state: { showToast: true, message: toastMessage },
    });
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold pb-3">Register</h2>
      <div className="bg-gray-50 w-200 h-100 px-10 rounded-2xl">
        <form
          onSubmit={submitRegisterForm}
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
            <label htmlFor="confirmPassword" className="customLabel">
              Confirm password:
            </label>
            <input
              className="customInput"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="btn login-btn">
              Register
            </button>
          </div>
        </form>
      </div>
      <p className="text-sm">
        Already a user? Log in{" "}
        <a className="text-blue-700" href="/login">
          here!
        </a>
      </p>
      <ToastContainer />
    </div>
  );
};
export default Register;
