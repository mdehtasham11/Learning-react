import React from "react";
import { useState, useEffect } from "react";
import Container from "./Container";

const InputField = () => {
  const [notes, setnotes] = useState();
  const [textInput, setTextInput] = useState();
  const handlebtn = (e) => {
    e.preventDefault();
    window.location.reload();
    console.log(textInput);
    const key = Date.now().toString();
    localStorage.setItem(key, textInput);
  };

  const handleDeleteNote = (key) => {
    localStorage.removeItem(key);

    const updatedNotes = { ...notes };
    delete updatedNotes[key];
    setnotes(updatedNotes);
  };

  useEffect(() => {
    const localStorageData = () => {
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        data[key] = localStorage.getItem(key);
      }

      setnotes(data);
    };

    localStorageData();
  }, []);
  return (
    <div
      className="flex flex-wrap w-full justify-center"
    >
      <div className="flex flex-col justify-center items-center w-full my-5 ">
        <form className=" flex flex-col" onSubmit={handlebtn}>
          <textarea
            style={{ height: "200px" }}
            placeholder="Enter text"
            value={textInput}
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
            className="border border-black px-4 py-1 rounded-md outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="border rounded-md bg-blue-700 px-4 py-1 my-1 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
      {notes &&
        Object.entries(notes).map(([key, value]) => (
          <div key={key}>
            <Container
              value={value}
              keynote={key}
              onDelete={handleDeleteNote}
            />
          </div>
        ))}
    </div>
  );
};

export default InputField;
