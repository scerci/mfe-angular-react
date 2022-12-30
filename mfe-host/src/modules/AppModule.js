import React, { useEffect } from "react";
import { mount } from "appModule/AppModule";

const RemoteAppModule = () => {
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="remote-module">
      <app-root></app-root>
    </div>
  );
};

export default RemoteAppModule;
