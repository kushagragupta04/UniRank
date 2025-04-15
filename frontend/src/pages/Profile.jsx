import React from 'react';
import { FaEye, FaHeart, FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
    return (
        <div className="min-h-screen p-6 ">

            <div className="flex justify-between items-center mb-5">

            <div className="w-40"></div>

                <h2 className="text-2xl font-bold text-blue-800">Personal Profile</h2>
                <Link
                    to="/EditProfile"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow text-sm"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487a2.25 2.25 0 113.182 3.182L7.5 20.213 3 21l.787-4.5L16.862 4.487z"
                        />
                    </svg>
                    Edit Profile
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Personal Info */}
                <section className="bg-white p-6 rounded-xl shadow col-span-2 md:col-span-1">
                    <h3 className="font-bold text-lg mb-4">Personal Information</h3>
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://api.dicebear.com/7.x/initials/svg?seed=Rahul%20Sharma"
                            alt="profile"
                            className="w-24 h-24 rounded-full"
                        />
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Name:</span> Rahul Sharma</p>
                            <p><span className="font-semibold">Email:</span> rahul.sharma@muj.manipal.edu</p>
                            <p><span className="font-semibold">Contact:</span> +91 98765 43210</p>
                            <p><span className="font-semibold">College:</span> Manipal University Jaipur</p>
                            <p><span className="font-semibold">Address:</span> 123 MU Campus, Jaipur, Rajasthan, India</p>
                        </div>
                    </div>

                </section>

                {/* Coding Stats */}
                <section className="bg-white p-6 rounded-xl shadow col-span-1">
                    <h3 className="font-bold text-lg mb-4">Coding Stats</h3>
                    <div className="flex space-x-1 mb-2">
                        {[...Array(28)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded ${i % 4 < 2 ? 'bg-green-500' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 mb-2">Last 4 weeks</p>
                    <p><span className="font-semibold">LeetCode:</span> 350+ problems solved</p>
                    <p><span className="font-semibold">GitHub:</span> 500+ contributions</p>
                    <p><span className="font-semibold">HackerRank:</span> 5-star coder</p>
                </section>

                {/* Recent Posts */}
                <section className="bg-white p-6 rounded-xl shadow col-span-2 md:col-span-1">
                    <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
                    <div className="text-sm space-y-4">
                        <div>
                            <p>Just solved a tricky DSA problem on LeetCode!</p>
                            <div className="flex space-x-4 text-gray-500 text-xs mt-1">
                                <span className="flex items-center gap-1"><FaEye /> 120</span>
                                <span className="flex items-center gap-1"><FaHeart /> 45</span>
                            </div>
                        </div>
                        <div>
                            <p>Check out my new web development project!</p>
                            <div className="flex space-x-4 text-gray-500 text-xs mt-1">
                                <span className="flex items-center gap-1"><FaEye /> 89</span>
                                <span className="flex items-center gap-1"><FaHeart /> 32</span>
                            </div>
                        </div>
                        <div>
                            <p>Excited for the upcoming hackathon at MUJ!</p>
                            <div className="flex space-x-4 text-gray-500 text-xs mt-1">
                                <span className="flex items-center gap-1"><FaEye /> 150</span>
                                <span className="flex items-center gap-1"><FaHeart /> 67</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Activity */}
                <section className="bg-white p-6 rounded-xl shadow col-span-2 md:col-span-1">
                    <h3 className="font-bold text-lg mb-4">Activity</h3>
                    <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2"><FaCommentDots className="mt-1" /> Commented on Riya's post about machine learning</li>
                        <li className="flex items-start gap-2"><FaCommentDots className="mt-1" /> Reposted an article on the future of AI</li>
                        <li className="flex items-start gap-2"><FaCommentDots className="mt-1" /> Liked Amit's post about his internship experience</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
