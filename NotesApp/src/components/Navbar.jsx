import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-slate-600 px-8 py-2">
      <div className="flex flex-wrap items-center justify-between w-full">
        <h3 className="text-white font-bold text-lg">Notes App</h3>
        <div className="flex items-center gap-1">
          <input 
          type="text" 
          placeholder="search" 
          className="rounded-md px-4 py-1" />
          <button className="text-white border rounded-md bg-red-400 px-4 py-1">search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
