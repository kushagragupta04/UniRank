import React from 'react';
import { useEffect, useState } from "react";

export default function Home() {
    const [name, setName] = useState("Kushagra");

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) setName(storedName);
    }, []);
    return (
        <div className="flex flex-col items-center min-h-screen ">
            <div className="flex flex-col md:flex-row min-h-screen">

                {/* Left Section - Sticky Profile */}
                <div className=" flex-1 flex items-start justify-end p-4 sticky">
                    <div className="bg-white flex flex-col items-center shadow-lg rounded-lg p-5 w-72 sticky top-16">
                        <div className="flex">
                            <img
                                src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
                                alt="avatar"
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-3">
                                <h2 className="text-lg font-bold">{name}</h2>
                                <p className="text-sm font-semibold">Software Engineer</p>
                            </div>
                        </div>
                        <div>
                            <ul className="mt-2 space-y-1 text-sm">
                                <li>5+ years experience in Web Dev</li>
                                <li>Expert in React & Node.js</li>
                                <li>Worked at Google & Microsoft</li>
                                <li>Open-source contributor</li>
                                <li>Tech blogger & mentor</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Middle Section - Feed */}
                <div className="flex flex-col max-w-screen-sm  items-center p-2 pt-4 justify-center min-h-screen">
                    {/* Repeatable feed post structure */}
                    <div>

                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Diya Sharma</p>
                            <p className="text-sm text-gray-600 mb-2">
                                Our team just clinched first place at the annual college hackathon! We developed a real-time collaboration tool for students under 36 hours. It was a challenging yet rewarding experience, and I’m super proud of what we achieved. Check it out here: [link]
                            </p>
                        </div>

                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Rohan Mehta</p>
                            <p className="text-sm text-gray-600 mb-2">
                                I'm thrilled to share that I’ve officially earned my AWS Certified Cloud Practitioner certification. Diving deep into cloud concepts and infrastructure really helped me understand scalable systems better. Can't wait to apply these skills in real projects!
                            </p>
                        </div>

                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Sneha Kapoor</p>
                            <p className="text-sm text-gray-600 mb-2">
                                Just published my first ever technical blog! It’s all about understanding JavaScript closures in simple terms. If you're someone who gets confused by scope or lexical environments, this might be helpful. Would love your feedback! [link]
                            </p>
                        </div>

                        <div className="bg-white p-4 mb-4 rounded-xl shadow">
                            <p className="font-semibold">Diya Sharma</p>
                            <p className="text-sm text-gray-600 mb-2">
                                Won first place in the college hackathon! Check out our project: [link]
                            </p>
                            <div className="bg-gray-200 h-32 w-full rounded" />
                        </div>
                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Arjun Rao</p>
                            <p className="text-sm text-gray-600 mb-2">
                                Excited to announce that I’ve started my internship at TCS as a backend developer! It's been just a week, and I'm already learning so much about microservices, APIs, and how large-scale applications function in the real world.
                            </p>
                        </div>

                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Meera Verma</p>
                            <p className="text-sm text-gray-600 mb-2">
                                I recently made my first contribution to an open-source project on GitHub! It’s a React-based note-taking app, and I helped fix a bug in the search functionality. Really grateful for the welcoming community and looking forward to contributing more.
                            </p>
                        </div>

                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Kunal Deshmukh</p>
                            <p className="text-sm text-gray-600 mb-2">
                                Feeling proud to share that our team made it to the top 5 in the Smart India Hackathon! We built an AI-powered crop suggestion tool for farmers. This journey taught me so much about teamwork, deadlines, and building with purpose.
                            </p>
                        </div>

                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Aanya Patel</p>
                            <p className="text-sm text-gray-600 mb-2">
                                I finally launched my full-stack project built using the MERN stack! It's a task management platform with JWT auth, real-time notifications, and clean UI. It’s been a huge learning curve and I’m proud of the result. Would love your thoughts! [link]
                            </p>
                        </div>

                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Ishaan Malik</p>
                            <p className="text-sm text-gray-600 mb-2">
                                Just wrapped up a super intense system design bootcamp hosted by Scaler. Learned about load balancing, caching, CAP theorem, and a lot more! Definitely helped me gain confidence in tackling interview-level design questions.
                            </p>
                        </div>

                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Neha Bansal</p>
                            <p className="text-sm text-gray-600 mb-2">
                                Attended a thought-provoking tech talk on AI and ethics. The discussion around algorithmic bias and data transparency really made me think about the responsibility we hold as developers when building intelligent systems.
                            </p>
                        </div>

                        <div className="bg-white mb-4 p-4 rounded-xl shadow">
                            <p className="font-semibold">Rajiv Nair</p>
                            <p className="text-sm text-gray-600 mb-2">
                                Just finished building a typing speed test app inspired by MonkeyType! It includes both word-count and time-based modes, plus a line graph to track WPM progress. No backend, just clean HTML, Tailwind CSS, and JavaScript. Try it out here: [link]
                            </p>
                        </div>



                    </div>

                    {/* Add more posts here */}
                </div>


                {/* Right Section - Rankings & Performance */}
                <div className="flex-1 flex flex-col items-start gap-4 p-4 sticky top-12 h-fit self-start">
                    <div className="bg-white p-4 rounded-xl shadow border-t-4 border-orange-500 w-72">
                        <h2 className="font-bold text-orange-500">Your Performance</h2>
                        <p className="mt-2 text-blue-700 font-semibold">You're in the top 3%!</p>
                        <div className="flex justify-between text-sm text-gray-500 mt-4">
                            <span>Mon</span><span>Tue</span><span>Wed</span>
                            <span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow border-t-4 border-green-500 w-72">
                        <h2 className="font-bold text-green-600">Your Rankings</h2>
                        <ul className="mt-2 text-sm">
                            <li className="flex justify-between">
                                <span>DSA:</span> <span>Rank 15/100</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Web Dev:</span> <span>Rank 8/100</span>
                            </li>
                            <li className="flex justify-between">
                                <span>ML:</span> <span>Rank 25/100</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    );
}
