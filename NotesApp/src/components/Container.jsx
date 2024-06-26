import React from "react";
import { useState, useEffect } from "react";

const Container = ({ name, desc }) => {
  const handleDelete = () => {
    onDelete(keynote);
  };

  return (
    <div className="flex flex-col border border-black rounded-md w-56 h-54 px-2 mx-4 my-4 mt-8">
      <h3 className=" font-bold">{name}</h3>
      <div>{desc}</div>
      <div className="flex flex-wrap my-2 gap-2">
        <button className="border border-white text-white rounded-md px-5 bg-green-500 outline-none cursor-pointer">
          Edit
        </button>
        <button className="border border-White  text-white rounded-md px-5 bg-red-600 outline-none cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Container;
