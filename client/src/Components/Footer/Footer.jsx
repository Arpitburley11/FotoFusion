import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="py-8 text-white bg-black">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-teal-400">FotoFusion</h2>
                        <p className="mt-2 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et expedita a id unde facere sapiente distinctio modi maiores corrupti optio dolore velit voluptate quisquam iure aut sit suscipit nemo, accusamus assumenda beatae consectetur quas repellendus praesentium. Excepturi, ducimus! Sapiente deleniti facere natus atque fuga, aliquam nemo saepe laborum. Ab?
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                        <div>
                            <h3 className="text-xl font-semibold text-teal-400">Links</h3>
                            <ul className="mt-2 space-y-2">
                                <li><Link to="/" className="text-gray-400 hover:text-teal-400">Explore</Link></li>
                                <li><Link to="/" className="text-gray-400 hover:text-teal-400">Company</Link></li>
                                <li><Link to="/" className="text-gray-400 hover:text-teal-400">Community</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-teal-400">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-400 w-[100px]">Follow Us</h3>
                            <ul className="mt-2 space-y-2">
                                <li><Link to="https://www.facebook.com/" className="text-gray-400 hover:text-teal-400">Facebook</Link></li>
                                <li><Link to="https://x.com/?lang=en" className="text-gray-400 hover:text-teal-400">Twitter</Link></li>
                                <li><Link to="https://www.instagram.com/" className="text-gray-400 hover:text-teal-400">Instagram</Link></li>
                                <li><Link to="https://www.linkedin.com/" className="text-gray-400 hover:text-teal-400">LinkedIn</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-400">Contact</h3>
                            <ul className="mt-2 space-y-2">
                                <li className="text-gray-400">Email: fotofusion@gmail.com</li>
                                <li className="text-gray-400">Phone: 212-658-3916</li>
                                <li className="text-gray-400">Address: 23 E. Aspen St.Woodside, NY 11377</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between pt-4 mt-8 text-center text-gray-400 border-t border-gray-700 md:flex-row">
                    <span>&copy; {new Date().getFullYear()} FotoFusion. All rights reserved.</span>
                    <div className="flex justify-center mt-4 space-x-6 md:mt-0">
                        <Link to="https://www.facebook.com/" className="text-teal-400 hover:text-teal-600"><i className="ri-facebook-circle-fill"></i></Link>
                        <Link to="https://www.instagram.com/" className="text-teal-400 hover:text-teal-600"><i className="ri-instagram-fill"></i></Link>
                        <Link to="https://x.com/?lang=en" className="text-teal-400 hover:text-teal-600"><i className="ri-twitter-x-fill"></i></Link>
                        <Link to="https://www.linkedin.com/" className="text-teal-400 hover:text-teal-600"><i className="ri-linkedin-fill"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
