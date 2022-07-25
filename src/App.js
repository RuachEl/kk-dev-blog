import { Link } from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <div>
      <h1>Klint's Dev Blog</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/archive">Archive</Link>
      </nav>
    </div>
  );
}