import "./App.css";
import React from "react";
import RemoteAppModule from "./modules/AppModule";
import RemoteExtModule from "./modules/ExternalModule";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT</h1>
        <RemoteAppModule></RemoteAppModule>
        <RemoteExtModule></RemoteExtModule>
      </header>
    </div>
  );
}

export default App;
