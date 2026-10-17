import React, { useEffect, useState } from "react";
import { ApiData, getJson } from "./api";

function App() {
  const [data, setData] = useState<ApiData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getJson().then(setData).catch(() => setError("Ошибка загрузки API"));
  }, []);

  return (
    <main style={{ maxWidth: 720, margin: "60px auto", fontFamily: "Arial" }}>
      {error ? <p>{error}</p> : data ? (
        <>
          <h1>{data.title}</h1>
          <p>{data.author} · группа {data.group}</p>
          <h2>Изученные технологии</h2>
          <ul>{data.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
          <p>Данные получены из JSON API.</p>
        </>
      ) : <p>Загрузка...</p>}
    </main>
  );
}

export default App;
