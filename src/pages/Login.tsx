import { FormEvent } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = function () {
  const formData = { username: "user@email.com", password: "password" };

  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      login(formData.username, formData.password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Email</label>
          <input type="username" id="username" name="username" value={formData.username} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
