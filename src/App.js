import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.disneyapi.dev/characters")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log("error", err));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtered = data.filter((name) =>
    name.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Disney World</h1>
      <center>
        <input
          type="text"
          placeholder="search the item you need "
          value={search}
          style={{
            fontSize: "20px",
            padding: "3px",
            width: "50%",
            height: "40px"
          }}
          onChange={handleSearch}
        />
      </center>
      <br />
      <br />

      <div
        style={{
          display: "flex",
          margin: "3px",
          mx: "auto",
          flexWrap: "wrap",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {filtered.map((item, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "2px solid black",
              borderRadius: "5px",
              width: "300px",
              margin: "10px",
              padding: "3px",
              width: "300px",
              height: "300px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "3px"
              }}
            >
              <img
                src={item.imageUrl}
                alt="index"
                width="290px"
                height="200px"
              />
              <p style={{ fontSize: "30px", fontWeight: "700" }}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
