import { useState } from 'react';

export default function Search() {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex items-center justify-center mb-10">
            <form onSubmit={handleSearch} className="flex items-center overflow-hidden bg-white border border-gray-300 rounded-md shadow-sm">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button type="submit" className="px-4 py-2 text-white bg-teal-400 hover:bg-teal-600">
                    Search
                </button>
            </form>
        </div>
    );
}
