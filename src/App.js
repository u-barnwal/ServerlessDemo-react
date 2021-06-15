import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const results = await axios.get("./.netlify/functions/helloWorld");
    setMessage(results.data.message);
  };

  useEffect(() => fetchData(), []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
