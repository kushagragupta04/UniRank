import { Link, useNavigate ,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setShowDropdown(false);
        navigate("/signin"); // or "/"
    };

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg text-white px-9 py-2 flex justify-between items-center rounded-l">
            {/* Logo */}
            <Link to="/">
                <h1 className="text-xl font-bold">UniRank</h1>
            </Link>

            <div className="relative flex items-center gap-6">
                {/* Navigation */}
                <nav className="flex space-x-4 text-white font-normal">
                    <Link to="/">Home</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/collaborate">Collaborate</Link>
                </nav>

                {isLoggedIn ? (
                    // Avatar and dropdown
                    <div className="relative">
                        <div
                            className="w-8 h-8 bg-white rounded-full bg-cover bg-center cursor-pointer hover:scale-105 transition-transform duration-200"
                            style={{
                                backgroundImage: "url('/path-to-avatar-image.jpg')", // Replace later
                            }}
                            onClick={() => setShowDropdown(!showDropdown)}
                        />
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-md overflow-hidden z-10">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={() => setShowDropdown(false)}
                                >
                                    Profile
                                </Link>
                                <button
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={handleLogout}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/signin">
                        <button className="bg-white text-orange-500 font-semibold px-4 py-1 rounded-full hover:bg-orange-100 transition-all">
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
}
