import React, { useEffect, useState } from "react";

export default function Cartdemo() {
  const [user, setUser] = useState("");
  const [dtaUser, setDtaUser] = useState([]);

  useEffect(() => {
    const saveD = localStorage.getItem("save");
    if (saveD) {
      setDtaUser(JSON.parse(saveD));
    }
  }, []);

  const HandleClick = (data) => {
    if (data.trim() !== "") {
      const saveS = [...dtaUser, data];
      setDtaUser(saveS);
      localStorage.setItem("save", JSON.stringify(saveS));
    }
  };

  const cancel = (index) => {
    const Cnsl = dtaUser.filter((_, i) => i !== index);
    setDtaUser(Cnsl)
    localStorage.setItem("save",JSON.stringify(Cnsl))
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-96 h-72 border flex justify-center items-center flex-col gap-3 ">
        <input
          type="text"
          className="border"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button
          onClick={() => {  
            HandleClick(user);
          }}
        >
          Enter
        </button>
        <ul>
          {dtaUser.map((value, index) => (
            <li key={index}>{value} <button onClick={()=>{cancel(index)}}>x</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
