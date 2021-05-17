import React from "react";
import logo from "./MadeLogo.2.svg";
import "./App.css";

const data = require("./data.json");

const App = () => {
  const prefix =
    "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,w_120,dpr_1.0,q_auto:good,b_rgb:f5f6f4/v4/";

  const items = data.data.tag.products.edges;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>SANDBOX</code>
        </p>
      </header>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <img src={prefix + item.node.media.listingImage.square.path} />
              <p>{item.node.name}</p>
              <p>{item.node.price.current}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
