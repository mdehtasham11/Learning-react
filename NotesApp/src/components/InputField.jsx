import React from "react";
import { useState, useEffect } from "react";
import Container from "./Container";
import MainContainer from "./MainContainer";

const InputField = ({ name, desc }) => {
  const [notes, setnotes] = useState("");
  const [textInput, setTextInput] = useState();
  const [title, settitle] = useState();
  const handlebtn = (e) => {
    e.preventDefault();
    window.location.reload();
    // console.log(textInput);
    const key = Date.now().toString();
    const InputData = { title, textInput };
    const InputStringData = JSON.stringify(InputData);
    // console.log(InputStringData);
    localStorage.setItem(key, InputStringData);
  };

  const handleDeleteNote = (key) => {
    localStorage.removeItem(key);
    const updatedNotes = { ...notes };
    delete updatedNotes[key];
    setnotes(updatedNotes);
  };

  useEffect(() => {
    const localStorageData = () => {
      const storedNotes = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedData = JSON.parse(localStorage.getItem(key));
        storedNotes[key] = storedData;
      }

      // console.log(storedNotes);

      setnotes(storedNotes);
    };

    localStorageData();
  }, []);

  return (
    <div className="flex flex-wrap w-full justify-center">
      <div className="flex flex-col justify-center items-center w-full my-5 ">
        <form className=" flex flex-col" onSubmit={handlebtn}>
          <textarea
            placeholder="Enter title"
            className="flex justify-center border border-black px-4  mb-2 rounded-md outline-none resize-none "
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          ></textarea>
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
      {name && (
        <div>
          <Container name={name} desc={desc} />
        </div>
      )}
      {!name &&
        notes &&
        Object.entries(notes).map(([key, value]) => (
          <div key={key}>
            <MainContainer
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
