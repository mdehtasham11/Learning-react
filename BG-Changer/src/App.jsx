import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 ">
        <div className="felx flex-wrap justify-center shadow-sm rounded-3xl gap-3 bg-white px-8 py-1">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg mx-2"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg mx-2"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg mx-2"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg mx-2"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setcolor("white")}
            className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg mx-2"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setcolor("grey")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg mx-2"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setcolor("black")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg mx-2"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
