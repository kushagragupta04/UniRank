import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isRegistering) {
                const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/register`, {
                    name,
                    email,
                    password,
                    role: "student"
                }, { withCredentials: true });

                const { token, name: userName, email: userEmail } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("name", userName);
                localStorage.setItem("email", userEmail);


                navigate("/");
            } else {
                const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/login`, {
                    email,
                    password,
                }, { withCredentials: true });

                const token = res.data.token;
                if (token) localStorage.setItem("token", token);
                navigate("/");
            }
        } catch (err) {
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

    const handleRecruiterRegister = async () => {
        try {
            const name = prompt("Enter your name:");
            const email = prompt("Enter your recruiter email:");
            const password = prompt("Enter your password:");

            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/register`, {
                name,
                email,
                password,
                role: "recruiter"
            }, { withCredentials: true });

            const token = res.data.token;
            localStorage.setItem("token", data.token);
            localStorage.setItem("name", data.name);
            localStorage.setItem("email", data.email);

            navigate("/");
        } catch (err) {
            alert(err.response?.data?.message || "Recruiter registration failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
                    {isRegistering ? "Register as a Student" : "Sign In as a Student"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {isRegistering && (
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition-all"
                    >
                        {isRegistering ? "Register" : "Sign In"}
                    </button>
                </form>

                <p className="text-sm text-center mt-3">
                    {isRegistering ? (
                        <>
                            Already have an account?{" "}
                            <span
                                className="text-orange-600 font-medium cursor-pointer"
                                onClick={() => setIsRegistering(false)}
                            >
                                Sign in here
                            </span>
                        </>
                    ) : (
                        <>
                            New user?{" "}
                            <span
                                className="text-orange-600 font-medium cursor-pointer"
                                onClick={() => setIsRegistering(true)}
                            >
                                Register here
                            </span>
                        </>
                    )}
                </p>

                <div className="mt-6">
                    <button
                        onClick={handleRecruiterRegister}
                        className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-all"
                    >
                        Register as a Recruiter
                    </button>
                </div>
            </div>
        </div>
    );
}
