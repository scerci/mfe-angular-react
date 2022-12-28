import React, { useEffect, useRef } from "react";
import { mount } from "appModule/AppModule";

const RemoteAppModule = () => {
  const ref = useRef(null);
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
