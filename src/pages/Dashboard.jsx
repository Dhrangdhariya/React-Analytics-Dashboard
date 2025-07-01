import React, { useState } from 'react';
import { useContexts } from '../context/Contexts';
import Card from '../components/Card';
import PieCharts from '../components/PieCharts';

const Dashboard = () => {
  const { user, theme } = useContexts();
  const [search, setSearch] = useState('');

  const filteredUsers = user.filter((u) =>
    u.brand.toLowerCase() === search.toLowerCase()
  );

  const selectedUser = filteredUsers[0]; // use the first matched user

  return (
    <div className={`${theme ? 'bg-white' : 'bg-gray-800 text-white'} space-y-6 p-2 rounded`}>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`${theme ? '' : 'bg-gray-700'} p-2 border rounded w-[10rem] outline-0`}
      />

      {filteredUsers.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Total User" value={selectedUser.totalUser} />
            <Card title="Total Subscription" value={selectedUser.totalSub} />
            <Card title="Active Subscription" value={selectedUser.activeSub} />
          </div>

          <h2 className="text-xl font-semibold mb-4 mt-4">Subscription Analytics</h2>
          <PieCharts
            totalUser={selectedUser.totalUser}
            totalSubscription={selectedUser.totalSub}
            activeSubscription={selectedUser.activeSub}
          />
        </>
      )}

      {filteredUsers.length === 0 && search !== '' && (
        <p className="text-red-400">No users found for brand "{search}"</p>
      )}
    </div>
  );
};

export default Dashboard;
