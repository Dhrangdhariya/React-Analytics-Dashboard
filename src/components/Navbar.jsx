import React from 'react';
import { useContexts } from '../context/Contexts';

const Navbar = () => {
  const {
    theme,
    setTheme,
    handleThemeToggle
  } = useContexts();
  return (
    
    <header className={`${theme ? 'bg-white' : 'bg-gray-800 text-white'} shadow p-4 pr-5 flex justify-between items-center`}>
      <h1 className="text-[1.25rem] font-bold">Dashboard</h1>
      <div className="flex items-center gap-2 text-[1.5rem]">
        <i className={`${theme ? ' hover:text-gray-700 ' : ' '} fa-solid fa-circle-user `}></i> <p className='text-[1.25rem]'>User</p>
      </div>
    </header>
  );
};

export default Navbar;
