import { useState, useCallback, useEffect } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [characterallowed, setCharacterallowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatepassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberallowed) str += "0123456789";
    if (characterallowed) str += "!@#$%^&*";
    console.log(str);
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, characterallowed, setPassword]);

  useEffect(() => {
    generatepassword();
  }, [length, numberallowed, characterallowed, setPassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg p-4 rounded-md my-8 text-orange-500 bg-gray-700">
        <div className="flex flex-col shadow rounded-lg overflow-hidden mb-4">
          <h1 className="text-white text-center text-lg font-semibold mb-2">
            Password Generator
          </h1>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-3 px-4 bg-gray-800 text-white rounded"
              placeholder="Password"
              readOnly
            />
            <button className="outline-none bg-blue-700 text-white px-4 py-2 rounded shrink-0">
              Copy
            </button>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              className="curser-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">length {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              checked={numberallowed}
              onChange={() => setNumberallowed((pre) => !pre)}
            />
            <label htmlFor="">Numbers</label>
            <input
              type="checkbox"
              checked={characterallowed}
              onChange={() => setCharacterallowed((pre) => !pre)}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
