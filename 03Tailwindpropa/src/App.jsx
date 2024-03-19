import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1
        className="bg-green-400 text-black p-2
      rounded-xl"
      >
        hello
      </h1>
      <Card Heading="About PCs" Btntext="Next"/>
      <Card Heading="About Windows" Btntext="Close"/>
    </>
  );
}

export default App;
