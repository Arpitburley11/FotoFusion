import React from 'react';

export default function Contact() {
    return (
        <div className="py-12 bg-gray-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                    <div className="md:flex">
                        <div className="relative md:w-1/2">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1687533704358-158add1d569d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fENvbnRhY3R8ZW58MHx8MHx8fDA%3D"
                                alt="Contact"
                                className="absolute object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-4xl font-bold text-white">Contact Us</h3>
                            </div>
                        </div>
                        <div className="px-6 py-8 bg-teal-400 md:w-1/2 md:bg-white md:p-12">
                            <h2 className="mb-4 text-3xl font-bold text-white md:text-teal-400">Contact Us</h2>
                            <p className="mb-6 text-white md:text-gray-700">
                                Have questions or feedback? Reach out to us using the form below.
                            </p>
                            <form className="space-y-4">
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full px-2 mb-4 md:w-1/2">
                                        <label
                                            htmlFor="name"
                                            className="block mb-1 font-medium text-white md:text-gray-700"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-teal-400"
                                            placeholder="Arpit Burley"
                                            required
                                        />
                                    </div>
                                    <div className="w-full px-2 mb-4 md:w-1/2">
                                        <label
                                            htmlFor="email"
                                            className="block mb-1 font-medium text-white md:text-gray-700"
                                        >
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-teal-400"
                                            placeholder="abcd@gmail.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="message"
                                        className="block mb-1 font-medium text-white md:text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-teal-400"
                                        placeholder="Enter your message..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
