import React from "react";

const RemoteModule = React.lazy(() => import("appModule/ExtModule").then((module) => ({ default: module.mount })));

const RemoteExtModule = () => {
  return (
    <div>
      <React.Suspense fallback="...loading">
        <RemoteModule />
      </React.Suspense>
    </div>
  );
};

export default RemoteExtModule;
