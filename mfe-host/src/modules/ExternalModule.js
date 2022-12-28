import React, { useEffect, useRef } from "react";
import { mountExt } from "appModule/AppModule";

const RemoteExtModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    mountExt();
  }, []);
  return (
    <div className="external-module">
      <app-dashboard></app-dashboard>
    </div>
  );
};

export default RemoteExtModule;
