import { useCallback, useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*<>?,/.`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);

  }, [length, num, char, setpassword]);


  useEffect(() => {
  passwordGenerator()
}, [length, num, char, passwordGenerator])



  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md 
     rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700"
      >
        <h1 className="text-white text-center">password generator</h1>
        <div
          className="flex shadow rounded-lg overflow-hidden
        mb-4"
        >
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="felx items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={num}
            id="numberInput"
            onChange={() => {
              setnum((prev) => (!prev))
            }}

            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={char}
            id="checkInput"
            onChange={() => {
              setchar((prev) => (!prev))
            }}

            />
            <label htmlFor="checkInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
