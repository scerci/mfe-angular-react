import React, { useEffect, useRef } from "react";
import { mountStandalone } from "appModule/AppModule";

const RemoteExtModule = () => {
  const angularCompRef = useRef();

  const angularMountStandalone = async () => {
    angularCompRef.current = await mountStandalone({myvari: "initial value"});
  }

  useEffect(() => {
      angularMountStandalone();
  }, []);

  const handleOnClick = () => {
    angularCompRef.current.myvari = Math.random() + " Random from React App"
    angularCompRef.current.cdRef.detectChanges();
  };
  
  return (
    <div className="external-module-tstst" onClick={handleOnClick}>
      <app-standalone></app-standalone>
    </div>
  );
};

export default RemoteExtModule;
