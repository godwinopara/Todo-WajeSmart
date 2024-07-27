import { FormEvent, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = function () {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const authUser = login(formData.username, formData.password);
      if (authUser) {
        setFormData({ username: "", password: "" });
        navigate("/todos");
      }
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
          <input
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
