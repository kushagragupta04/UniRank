import React from "react";
import { Link } from "react-router-dom";

const students = [
    { rank: 1, name: "Aarav Mehta", score: 995, achievement: "Google Kickstart Finalist" },
    { rank: 2, name: "Ishaan Sharma", score: 980, achievement: "ICPC Regional Winner" },
    { rank: 3, name: "Tanvi Rao", score: 965, achievement: "MITACS Research Internship" },
    { rank: 4, name: "Riya Kapoor", score: 952, achievement: "Flipkart Grid Finalist" },
    { rank: 5, name: "Kabir Verma", score: 940, achievement: "Smart India Hackathon Winner" },
    { rank: 6, name: "Simran Jain", score: 928, achievement: "Coding Ninjas Top Performer" },
    { rank: 7, name: "Devansh Yadav", score: 915, achievement: "Google DSC Lead" },
    { rank: 8, name: "Neha Patil", score: 902, achievement: "Open Source Contributor (GSoC)" },
    { rank: 9, name: "Raghav Nair", score: 888, achievement: "AI Research Paper (IEEE)" },
    { rank: 10, name: "Pooja Reddy", score: 875, achievement: "Microsoft Engage 2024" },
    { rank: 11, name: "Aditya Pillai", score: 860, achievement: "Backend Dev Intern @StartUp" },
    { rank: 12, name: "Meera Sinha", score: 842, achievement: "Frontend Mentor Challenge Top 5" },
    { rank: 13, name: "Yuvraj Singh", score: 828, achievement: "Leetcode Weekly Top 10%" },
    { rank: 14, name: "Ananya Dubey", score: 814, achievement: "AWS Certified Developer" },
    { rank: 15, name: "Tushar Bhatt", score: 800, achievement: "Kaggle Competition Silver" },
    { rank: 16, name: "Shruti Desai", score: 785, achievement: "MLSA Community Contributor" },
    { rank: 17, name: "Arnav Joshi", score: 770, achievement: "SIH Finalist" },
    { rank: 18, name: "Ira Iyer", score: 760, achievement: "UX Design Case Study Award" },
    { rank: 19, name: "Pranav Chauhan", score: 748, achievement: "Python Bootcamp Mentor" },
    { rank: 20, name: "Kritika Malhotra", score: 735, achievement: "Women Techmakers Scholar" },
    { rank: 21, name: "Siddharth Saxena", score: 720, achievement: "Internshala Student Partner" },
    { rank: 22, name: "Niharika Rawat", score: 710, achievement: "AI/ML Club Lead" },
    { rank: 23, name: "Mohit Rathi", score: 698, achievement: "Published Article on Blockchain" },
    { rank: 24, name: "Diya Sen", score: 685, achievement: "FOSS Contributor @GirlScript" },
    { rank: 25, name: "Rajeev Khanna", score: 672, achievement: "Codeforces Candidate Master" },
    { rank: 26, name: "Sneha Mishra", score: 659, achievement: "Web Dev Intern @NGO" },
    { rank: 27, name: "Manav Ghosh", score: 645, achievement: "Android App Dev Project" },
    { rank: 28, name: "Palak Jain", score: 632, achievement: "IEEE Club Organizer" },
    { rank: 29, name: "Kunal Aggarwal", score: 620, achievement: "Built Portfolio Website" },
    { rank: 30, name: "Jaya Thakur", score: 608, achievement: "Tech Blog Writer" },
];

const getRowClass = (rank) => {
    // if (rank === 1) return "bg-yellow-500/10 font-semibold";  // Gold
    // if (rank === 2) return "bg-gray-900/10 font-semibold";    // Silver
    // if (rank === 3) return "bg-yellow-900/20 font-semibold";  // Bronze
    return "bg-white";
};
export default function LeaderboardPage() {
    return (
        <div className="min-h-screen ">
            <main className="max-w-7xl mx-auto px-4 py-6">
                <h2 className="text-center text-2xl font-semibold mb-5 text-blue-900">Student Leaderboard</h2>

                <div className="rounded-xl shadow-xl overflow-hidden">
                    <div className="max-h-fit overflow-y-auto">
                        <table className="w-full text-sm text-center bg-white ">
                            <thead className="sticky top-0 z-10 text-white bg-gradient-to-r from-orange-500 to-yellow-500">
                                <tr>
                                    <th className="px-6 py-3">Rank</th>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Score</th>
                                    <th className="px-6 py-3">Achievements</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-200 ">
                                {students.map((student, idx) => (
                                    <tr key={idx} className={`hover:bg-blue-100 transition-colors duration-200 ${getRowClass(student.rank)}`}>
                                        <td className="px-6 py-4 ">{student.rank}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-left gap-2">
                                                <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-purple-600">
                                                    <img
                                                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`}
                                                        alt="avatar"
                                                        className="w-7 h-7 rounded-full"
                                                    />
                                                </div>
                                                <span className="text-center">{student.name}</span>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-lime-500 font-semibold">{student.score}</td>
                                        <td className="px-6 py-4 text-purple-400">{student.achievement}</td>
                                        <td className="px-6 py-4">
                                        <Link to="/collaborate">
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow">
                                                Message
                                            </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
