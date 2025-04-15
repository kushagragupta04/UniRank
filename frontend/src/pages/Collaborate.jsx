import React from 'react';

export default function Collaborate() {
    return (
        <div className="min-h-screen py-10">
            <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Message Someone */}
                <section className="bg-white p-6 rounded-xl shadow space-y-4">
                    <h2 className="text-xl font-bold text-gray-800">Message Someone</h2>
                    <input
                        placeholder="Search for someone..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="flex space-x-2">
                        <input
                            placeholder="Type your message..."
                            className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                            Send
                        </button>
                    </div>
                </section>

                {/* Recent Chats */}
                <section className="bg-white p-6 rounded-xl shadow space-y-4">
                    <h2 className="text-xl font-bold text-gray-800">Recent Chats</h2>
                    {[
                        { name: 'Priya Patel', message: 'Hey, can you help me with the DSA assignment?' },
                        { name: 'Amit Kumar', message: 'Thanks for your help yesterday!' },
                        { name: 'Neha Gupta', message: 'Are you going to the hackathon next week?' },
                    ].map((chat, i) => (
                        <div key={i} className="p-4 bg-gray-100 rounded-lg flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-gray-800">{chat.name}</p>
                                <p className="text-sm text-gray-600">{chat.message}</p>
                            </div>
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-1" />
                        </div>
                    ))}
                </section>

                {/* Collaboration Requests */}
                <section className="bg-white p-6 rounded-xl shadow space-y-4">
                    <h2 className="text-xl font-bold text-gray-800">Collaboration Requests</h2>

                    {/* Request 1 */}
                    <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-gray-800">Rajesh Singh</p>
                            <p className="text-sm text-gray-600">Status: Pending</p>
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg shadow text-sm">
                            Cancel
                        </button>
                    </div>

                    {/* Request 2 */}
                    <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-gray-800">Ananya Sharma</p>
                            <p className="text-sm text-gray-600">Status: Accepted</p>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg shadow text-sm">
                            Message
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
