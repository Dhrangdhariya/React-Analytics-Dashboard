import { useContexts } from '../context/Contexts'

const Products = () => {
  const {
    user,
    theme,
  } = useContexts();
// bg-gray-100
  return (
    <div className={`${theme ? 'bg-white' : 'bg-gray-800 text-white'} p-4 rounded-lg shadow`}>
      <h2 className="text-lg font-semibold mb-4">Product Inventory</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className={`${theme ? 'bg-gray-100' : 'bg-gray-700'}`}>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Total User</th>
            <th className="p-2 border">Total Subscribers</th>
            <th className="p-2 border">Active Subscriptions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((us,ind) => (
            <tr key={ind} className={`${theme ? 'hover:bg-gray-50' : 'hover:bg-gray-600'}`}>
              <td className="p-2 border">{ind}</td>
              <td className="p-2 border">{us.brand}</td>
              <td className="p-2 border">${us.price}</td>
              <td className="p-2 border">{us.totalUser}</td>
              <td className="p-2 border">{us.totalSub}</td>
              <td className="p-2 border">{us.activeSub}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products
