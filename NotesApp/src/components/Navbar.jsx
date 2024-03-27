import React, { useState } from "react";
import InputField from "./InputField";

const Navbar = () => {
  const [searchinput, setsearchinput] = useState("");
  // const [storedNotes, setStoredNotes] = useState([]);
  const [textdata, setTextData] = useState("");
  const [titledata, settitledata] = useState("");
  const handlesearchbtn = (e) => {
    e.preventDefault();
    const allData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = JSON.parse(localStorage.getItem(key));
      allData.push(data);
    }
    // console.log(storedNotes);
    // console.log(searchinput);
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].title === searchinput) {
        setTextData(allData[i].textInput);
        break;
      }
    }
    console.log(searchinput, textdata);
    settitledata(searchinput);
  };
  return (
    <>
      <nav className="flex bg-slate-600 px-8 py-2">
        <div className="flex flex-wrap items-center justify-between w-full">
          <h3 className="text-white font-bold text-lg">Notes App</h3>
          <div className="flex items-center gap-1">
            <form onSubmit={handlesearchbtn}>
              <input
                type="text"
                value={searchinput}
                placeholder="search"
                className="rounded-md px-4 py-1 outline-none"
                onChange={(e) => {
                  setsearchinput(e.target.value);
                }}
              />
              <button
                type="submit"
                className="text-white border rounded-md bg-red-400 px-4 py-1"
              >
                search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <InputField name={titledata} desc={textdata} />
    </>
  );
};

export default Navbar;
