import React, { useEffect } from "react";
import { mountStandalone } from "appModule/AppModule";

const RemoteExtModule = () => {
  useEffect(() => {
    mountStandalone();
  }, []);
  return (
    <div className="external-module">
      <app-standalone></app-standalone>
    </div>
  );
};

export default RemoteExtModule;
