import { useEffect, useState } from "react";
import { useUserContext } from "../../hooks/useUser";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { users } from "../data/users";
import bcrypt from "bcryptjs";
import { validatePassword, validateUsername } from "../../utils/validators";
import { FaInfoCircle } from "react-icons/fa";

const Register = () => {
  const { user, setUser } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("You're already logged in!");
  const [usernameInfo, setUsernameInfo] = useState(false);
  const [passwordInfo, setPasswordInfo] = useState(false);
  const navigate = useNavigate();

  // Redirect to home page if there is a user already logged in
  useEffect(() => {
    if (user) {
      navigate("/", {
        state: { showToast: true, message: toastMessage },
      });
    }
  }, [user, navigate]);

  const submitRegisterForm = async (e) => {
    e.preventDefault();

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

    if (!validateUsername(username)) {
      setConfirmPassword("");
      setPassword("");
      toast.error("Username not valid. Please, check criteria!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords don't match! Please, try again!");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    if (!validatePassword(password)) {
      // setConfirmPassword("");
      // setPassword("");
      toast.error("Invalid password. Please, check criteria!");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name: username,
      password: hashedPassword,
      avatar: "",
    };
    users.push(newUser);
    console.log(users);
    setToastMessage("User created successfully!");
    setUser(newUser);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold pb-3">Register</h2>
      <div className="bg-gray-50 w-200 h-100 px-10 rounded-2xl">
        <form
          onSubmit={submitRegisterForm}
          className="flex flex-col w-full h-full justify-around items-center"
        >
          <div className="relative">
            <label htmlFor="username" className="customLabel">
              Username:{" "}
              <FaInfoCircle
                className="inline text-amber-400 hover:cursor-pointer"
                onClick={() => setUsernameInfo(!usernameInfo)}
              />
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
            <div
              className={`absolute left-42 top-1 bg-gray-200 p-1 rounded-lg transition-all duration-200 ease-in-out w-100 ${
                usernameInfo
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              <p className="text-sm">
                Username must be between 5 and 20 characters long. No special
                characters allowed
              </p>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="password" className="customLabel">
              Password:{" "}
              <FaInfoCircle
                className="inline text-amber-400 hover:cursor-pointer"
                onClick={() => setPasswordInfo(!passwordInfo)}
              />
            </label>
            <input
              className="customInput"
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className={`absolute left-42 top-1 bg-gray-200 p-1 rounded-lg transition-all duration-200 ease-in-out w-150 ${
                passwordInfo
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              <p className="text-sm">
                Password must be at least 8 characters long, and include an
                uppercase letter, a lowercase letter, a special character and a
                number
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="customLabel">
              Confirm password:
            </label>
            <input
              className="customInput"
              type="text"
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
