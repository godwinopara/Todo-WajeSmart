import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAppContext();
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className="bg-black text-white py-8 text-lg">
      <nav>
        <ul className="px-5 max-w-[900px] mx-auto flex items-center justify-center gap-x-8">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/todos" className="hover:underline">
              Todos
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <button onClick={logoutUser} className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700">
                Logout
              </button>
            ) : (
              <Link to="/login" className="px-4 py-2 rounded-md hover:underline">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
