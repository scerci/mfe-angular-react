import "./App.css";
import React from "react";
import RemoteAppModule from "./modules/AppModule";
import RemoteExtModule from "./modules/ExternalModule";
import StandaloneModule from "./modules/StandaloneModule";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="header">
            <h1>REACT HOST</h1>
          </div>

          <div className="remotes">
            <div className="remotes-col">
              <RemoteAppModule></RemoteAppModule>
            </div>
            <div className="remotes-col">
              <RemoteExtModule></RemoteExtModule>
            </div>

            <div className="remotes-col">
              <StandaloneModule></StandaloneModule>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
