import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppProvider from "./context/AppContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoutes";
import Todo from "./pages/Todo";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todos"
            element={
              <ProtectedRoute>
                <Todo />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
