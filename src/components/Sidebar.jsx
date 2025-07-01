import { NavLink } from 'react-router-dom';
import { useContexts } from '../context/Contexts';

const Sidebar = () => {
  const {
    theme,
    handleThemeToggle
  } = useContexts();

  const navItem = `${theme ? 'hover:bg-gray-200' : 'hover:bg-gray-500'} flex items-center gap-2 px-4 py-3 rounded-lg`;
  const active = `${theme ? 'bg-gray-300' : 'bg-gray-500'} font-semibold`;

  return (
    <aside className={`${theme ? 'bg-white' : 'bg-gray-800 text-white'} w-64 border-r p-4 hidden md:block`}>
      <h2 className="text-[1.25rem] font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        <NavLink to="/" end className={({ isActive }) => `${navItem} ${isActive ? active : ''}`}>
          <i className="fa-solid fa-house"></i> Dashboard
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => `${navItem} ${isActive ? active : ''}`}>
          <i className="fa-regular fa-user"></i> Users
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => `${navItem} ${isActive ? active : ''}`}>
          <i className="fa-solid fa-cube"></i> Products
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `${navItem} ${isActive ? active : ''}`}>
          <i className="fa-solid fa-gear"></i> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
