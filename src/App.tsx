import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/global/Layout";
import Homepage from "./views/LandingPage/Homepage";
import AuthPage from "./views/Authentication/AuthPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout component for the entire website */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes for each page within the website */}
          <Route index element={<Homepage />} />
        </Route>
        {/* Authentication Routes */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
