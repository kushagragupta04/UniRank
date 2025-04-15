import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Collaborate from "./pages/Collaborate";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import EditProfile from "./pages/EditProfile";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-200 to-blue-100" />

      {/* Foreground Layer */}
      <div className="relative z-10">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/Signin" element={<Signin />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;