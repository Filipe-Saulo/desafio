import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img className="img" src="eu.jpg"></img>
      <h1>Filipe Saulo</h1>
      <p>
        Sansdjnasjkdnakjdnasnsakjdnajkdnnkasjndkjan
        <br />
        djkandasjdnsakjdnajkndkajnsdkjnajdknasjkdasajkndjkandjkasnjkdand
      </p>
      <div>
        <h4>Html+Css</h4>
        <h4>JavaScript</h4>
      </div>
      <div>
        <h4>Web Design</h4>
        <h4>Git and GitHub</h4>
      </div>
      <div>
        <h4>React</h4>
        <h4>Svelte</h4>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
