import React, { useState } from 'react';
import { useContexts } from '../context/Contexts';

const Users = () => {
    const {
        user,
        theme,
        deleteUser
    } = useContexts();
    const [search, setSearch] = useState('');

    const filteredUsers = user.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className={`${theme ? 'bg-white' : 'bg-gray-800 text-white '} p-4 rounded-lg shadow`}>
            <h2 className="text-lg font-semibold mb-4">User Management</h2>
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${theme ? '' : 'bg-gray-700'} p-2 border rounded w-full md:w-1/3 outline-0 `}
            />
            <table className="mt-5 w-full text-left border">
                <thead>
                    <tr className={`${theme ? ' bg-gray-100 ' : ' bg-gray-700 '}`}>
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Email</th>
                        <th className="p-2 border">Brand</th>
                        <th className="p-2 border">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user, ind) => (
                        <tr key={ind} className={`${theme ? 'hover:bg-gray-50' : 'hover:bg-gray-600'}`}>
                            <td className="p-2 border">{ind}</td>
                            <td className="p-2 border">{user.name}</td>
                            <td className="p-2 border">{user.email}</td>
                            <td className="p-2 border">{user.brand}</td>
                            <td className="p-2 border"><button
                                onClick={() => deleteUser(user.name)}
                                className="bg-red-500 text-white px-1 py-2 w-full rounded hover:bg-red-700 transition duration-200"
                            >
                                Delete
                            </button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
