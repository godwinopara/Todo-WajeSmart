import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppProvider from "./context/AppContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <ProtectedRoute path="/todos" component={TodoApp} /> */}
      </Router>
    </AppProvider>
  );
}

export default App;
