import "./App.css";
import Connect from "./component/Connect";
import Searchbar from "./component/Searchbar";
import Sidebar from "./component/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Token from "./component/Token";
import Pair from "./component/Pair";
import React, { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabSelection = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <Router>
      <div className="d-flex">
        <Sidebar onSelectTab={handleTabSelection} />
        <div>
          <div className="d-flex">
            <Searchbar />
            <Connect />
          </div>
          <div>{selectedTab === "pair" ? <Pair /> : <Token />}</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
