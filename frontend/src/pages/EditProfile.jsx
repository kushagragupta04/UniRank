import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function EditProfile() {
    const [projects, setProjects] = useState([{ name: '', description: '' }]);

    const addProject = () => {
        setProjects([...projects, { name: '', description: '' }]);
    };

    return (
        <div className="min-h-screen p-6">
            <h2 className="text-center text-2xl font-bold text-blue-800 mb-5">Edit Profile</h2>

            <div className="max-w-4xl mx-auto">
                {/* Personal Information */}
                <section className="bg-white p-6 rounded-xl shadow mb-6">
                    <h3 className="font-bold text-lg mb-4">Personal Information</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="font-semibold text-sm">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">Phone Number</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">Address</label>
                            <textarea
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your address"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">Bio</label>
                            <textarea
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter a short bio"
                            />
                        </div>
                    </form>
                </section>

                {/* Education */}
                <section className="bg-white p-6 rounded-xl shadow mb-6">
                    <h3 className="font-bold text-lg mb-4">Education</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="font-semibold text-sm">College</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your college name"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">Qualifying Degree</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your qualifying degree"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">Field of Study</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your field of study"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm">CGPA</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your CGPA"
                            />
                        </div>
                    </form>
                </section>

                {/* Skills */}
                <section className="bg-white p-6 rounded-xl shadow mb-6">
                    <h3 className="font-bold text-lg mb-4">Skills & Technologies</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="font-semibold text-sm">Skills, Frameworks, Technologies</label>
                            <textarea
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your skills, frameworks, and technologies"
                            />
                        </div>
                    </form>
                </section>

                {/* Projects */}
                <section className="bg-white p-6 rounded-xl shadow mb-6">
                    <h3 className="font-bold text-lg mb-4">Projects</h3>
                    <form className="space-y-4">
                        {projects.map((project, index) => (
                            <div key={index} className="space-y-2">
                                <div>
                                    <label className="font-semibold text-sm">Project Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                        value={project.name}
                                        onChange={(e) => {
                                            const newProjects = [...projects];
                                            newProjects[index].name = e.target.value;
                                            setProjects(newProjects);
                                        }}
                                        placeholder="Enter project name"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm">Project Description</label>
                                    <textarea
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                        value={project.description}
                                        onChange={(e) => {
                                            const newProjects = [...projects];
                                            newProjects[index].description = e.target.value;
                                            setProjects(newProjects);
                                        }}
                                        placeholder="Enter project description"
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addProject}
                            className="text-blue-500 text-sm mt-2 hover:underline"
                        >
                            Add more projects
                        </button>
                    </form>
                </section>

                <button className="w-full bg-green-400 hover:bg-green-600 text-white py-3 rounded-lg mt-4">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
