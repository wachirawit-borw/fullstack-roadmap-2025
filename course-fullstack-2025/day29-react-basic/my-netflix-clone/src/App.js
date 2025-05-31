// App.js
import React from "react";
import { movieCategories } from "./movieData"; // นำเข้าข้อมูลจำลอง
import MovieRow from "./MovieRow";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* หัวเว็บ */}
      <header className="header">
        <h1>My Netflix</h1>
      </header>

      {/* แสดงทุกหมวดหมู่ */}
      {movieCategories.map((cat, i) => (
        <MovieRow key={i} title={cat.title} movies={cat.movies} />
      ))}
    </div>
  );
}

export default App;
